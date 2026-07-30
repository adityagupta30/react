import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, Postcard } from "../components";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import CategorySection from "../components/CategorySection";
import SearchBar from "../components/SearchBar";

function Home() {
    const [search, setSearch] = useState("");

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
);

    return (
        <>
                 <HeroSection />

                <FeaturedSection />

                <CategorySection />

            <div className="w-full py-12 bg-gray-50">
                <Container>

                    <h2 className="text-3xl font-bold text-center mb-10">
                        Latest Blogs
                    </h2>

                    <SearchBar
                     search={search}
                    setSearch={setSearch}
                    />

                   {posts.length === 0 ? (
    <div className="text-center text-gray-500 text-lg">
        No blogs available yet.
    </div>
) : filteredPosts.length === 0 ? (
    <div className="text-center text-gray-500 text-lg">
        No matching blogs found.
    </div>
) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
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