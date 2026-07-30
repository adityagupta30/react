
import React ,{useCallback}from 'react'
 import { useForm } from 'react-hook-form'
 import {Button,Input,Select,RTE}from '../index'
 import appwriteService from "../../appwrite/config"
 import { useNavigate } from 'react-router-dom'
 import { useSelector } from 'react-redux'
 function PostForm({post}) {
    const {register,handleSubmit,watch,setValue,
        control,getValues}=useForm({
            defaultValues:{
                title: post?.title ||'',
                slug: post?.slug ||"",
                content: post?.content ||"",
                status: post?.status || 'active'
            }
        })
        const navigate = useNavigate()
        const userData = useSelector((state) => state.auth.userData)

      const submit = async (data) => {
    console.log("Submit Function Clicked");
    console.log("Form Data:", data);

    try {
        if (post) {
            const file = data.image[0]
                ? await appwriteService.uploadFile(data.image[0])
                : null;

            console.log("Uploaded File:", file);

            if (file) {
                await appwriteService.deleteFile(post.featuredimage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredimage: file ? file.$id : post.featuredimage,
            });

            console.log("Updated Post:", dbPost);

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }

        } else {

            console.log("Uploading file...");

            const file = await appwriteService.uploadFile(data.image[0]);

            console.log("Uploaded File:", file);

            if (!file) {
                console.log("File upload failed");
                return;
            }

            const dbPost = await appwriteService.createPost({
                title: data.title,
                slug: data.slug,
                content: data.content,
                featuredimage: file.$id,
                status: data.status,
                userId: userData.$id,
            });

            console.log("Created Post:", dbPost);

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }

    } catch (error) {
        console.error("Submit Error:", error);
    }
};
         const slugTransform = useCallback((value)=>{
            if (value && typeof value === 'string') 
                return value
                .trim()
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
                
            return "";

         },[])

         React.useEffect(()=>{
            const subscription = watch((value,{name})=>{
                if(name === 'title'){
                    setValue('slug',slugTransform(value.title),
                        {shouldValidate: true})

                }
            });
                 

            return()=>
                subscription.unsubscribe()
            

         },[watch,slugTransform,setValue])

    return (
       <form
    onSubmit={(e) => {
        e.preventDefault();
        console.log("FORM SUBMITTED");
        handleSubmit(submit)(e);
    }}
    className="flex flex-wrap"
>
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
 }
 
 export default PostForm
 