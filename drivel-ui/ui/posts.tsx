import {posts} from "#/lib/data/posts";
import Post from "#/ui/post";

function getData() {
    return posts.slice(10, 20);
}

export default function Posts() {

    const data = getData();

    return (
        <div className="container">
            {data.map((post) => <Post {...post}/>)}
        </div>
    )
}