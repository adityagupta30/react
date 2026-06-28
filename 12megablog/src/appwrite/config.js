 import conf from '../conf.js';
 import {Client,ID,Databases,Query,Storage} from "appwrite";

export class Service{
    client = new Client();

    databases;
    bucket;

    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
        this.databases= new Databases(this.client);
        this.bucket= new Storage();
    }

    async createPost ({title ,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            
        }
    }

    async updatePost(slug, {title ,content,featuredImage,status}){
            try {
                 return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                    }
                 )
            } catch (error) {
                console.log("Appwrite service :: updatePost :: error ", error);
                
            }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
                
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deletepost :: error", error);
            return false;
        }
    }
     async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getpost :: error",error);
            return false;
        }
     }

     async getPost(queries = [Query.equal("status","active")]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries
                    

                )
            } catch (error) {
                console.log("Appwrite service :: getPost :: error ", error);
                
            }
     }


     // file upload services

     async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.AppwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error ", error);
            return false
        }
     }


     async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.AppwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error ", error);
            return false
        }
     }


     getFilePreview(fileid){
        return this.getFilePreview(
            conf.AppwriteBucketId,
            fileid
        )
     }
}

const service = new Service();
export default service