import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, Postcard, Loader } from "../components";
function AllPosts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
          .finally(() => setLoading(false));

    }, []);
       
      if (loading) {
    return <Loader />;
}

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;