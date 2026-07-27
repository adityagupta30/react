import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, Postcard } from "../components";
import HeroSection from "../components/HeroSection";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <>
            <HeroSection />
            <section className="py-16 bg-gray-50">
    <Container>
        <h2 className="text-4xl font-bold text-center mb-10">
            Featured Blogs
        </h2>

        {/* 3 Featured Cards */}
    </Container>
</section>

            <div className="w-full py-12 bg-gray-50">
                <Container>

                    <h2 className="text-3xl font-bold text-center mb-10">
                        Latest Blogs
                    </h2>

                    {posts.length === 0 ? (
                        <div className="text-center text-gray-500 text-lg">
                            No blogs available yet.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Postcard key={post.$id} {...post} />
                            ))}
                        </div>
                    )}

                </Container>
            </div>
        </>
    );
}

export default Home;