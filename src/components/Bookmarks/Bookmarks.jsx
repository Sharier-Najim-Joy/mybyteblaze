import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import { deleteBlogs, getBlogs } from "../../utility/localStorage";
import EmptyState from "../EmptyState/EmptyState";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storeBlogs = getBlogs();
        setBlogs(storeBlogs)
    }, [])
    const handleDelete = id => {
        deleteBlogs(id)
        const storeBlogs = getBlogs();
        setBlogs(storeBlogs)
    }
    if(blogs.length < 1) return <EmptyState></EmptyState>
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
            }
        </div>

    )
};
export default Bookmarks;