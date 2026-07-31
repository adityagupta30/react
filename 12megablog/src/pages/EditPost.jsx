import React,{useEffect,useState} from 'react'
import {Container,PostForm} from "../components"
import appwriteService from "../appwrite/config"

import { useNavigate,useParams } from 'react-router-dom'

function EditPost() {
    const [post,setPost]=useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if (slug){
            appwriteService.getPost(slug).then((post)=>{
                if (post){
                    setPost(post)
                }
            })
             .finally(() => setLoading(false));
        } else {
            navigate("/")
        }
    },[slug,navigate])

    if (loading) {
    return <Loader />;
}

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ): null
}

export default EditPost
