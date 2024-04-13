import { useLoaderData } from 'react-router-dom'
import placeHolderImage from '../../assets/404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
const Content = () => {
    const blog = useLoaderData()
    const { cover_image, title, tags ,body_html,url} = blog;
    return (
        <div rel="noopener noreferrer" href="#" className=" mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 p-2">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {
                    tags.map(tag =>
                        <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>
                    )
                }
                <div className="p-6 space-y-2 min-w-10">
                    <a href={url} target='_blank' className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                    <Markdown rehypePlugins={[rehypeRaw]}>
                    {body_html}
                    </Markdown>
                    
                </div>
            </div>
        </div>
    );
};

export default Content;