import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, Loader  } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const userData = useSelector((state) => state.auth.userData);

    // Database me userid hai
    const isAuthor = post && userData
        ? post.userid === userData.$id
        : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    console.log("Fetched Post:", post);
                    setPost(post);
                } else {
                    navigate("/");
                }
            })
            .finally(() => setLoading(false));
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

 const deletePost = async () => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) return;

    try {

        const status = await appwriteService.deletePost(post.$id);

        if (status) {

            if (post.featuredimage) {
                await appwriteService.deleteFile(post.featuredimage);
            }

            toast.success("🗑️ Post Deleted Successfully!");

            navigate("/");
        }

    } catch (error) {

        console.log(error);

        toast.error(
            error?.message || "Failed to delete post."
        );
    }
};

if (loading) {
    return <Loader />;
}

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={
                            post.featuredimage
                                ? appwriteService.getFilePreview(post.featuredimage)
                                : "https://placehold.co/900x500?text=No+Image"
                        }
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor="bg-green-500"
                                    className="mr-3"
                                >
                                    Edit
                                </Button>
                            </Link>

                            <Button
                                bgColor="bg-red-500"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">
                        {post.title}
                    </h1>
                </div>

                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}