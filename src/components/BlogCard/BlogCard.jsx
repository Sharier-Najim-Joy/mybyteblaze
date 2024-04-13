import { Link } from "react-router-dom";
import placeHolderImage from '../../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";



const BlogCard = ({ blog, deletable,handleDelete }) => {
    const { cover_image, title, description, published_at, id } = blog;
 
    return (
        <div className="flex relative">
            <Link to={`/blogs/${id}`} rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 p-2">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
                {
                    deletable && <div 
                    onClick={()=>handleDelete(id)}
                    className="absolute bg-primary p-3 rounded-full hover:bg-opacity-30 opacity-20 cursor-pointer hover:scale-105 overflow-hidden -top-3 -right-3"><MdDeleteForever size={20} className="text-secondary"></MdDeleteForever></div>
                }
        </div>
    );
};

export default BlogCard;