import toast from 'react-hot-toast';
export const getBlogs = () =>{
    let blogs = []
    const storeBlogs = localStorage.getItem('blogs');
    if(storeBlogs){
        blogs = JSON.parse(storeBlogs);
    }
    return blogs
}

export const saveBlogs = blog =>{
    const sBlogs = getBlogs()
    const isExist = sBlogs.find(sBlog=>sBlog.id===blog.id);
    if(isExist){
      return toast.error('Already Bookmarked')
    }
    sBlogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(sBlogs));
    toast.success('Successfully Bookmarked')
}

export const deleteBlogs = id =>{
    const dBlogs = getBlogs();
    const remaining = dBlogs.filter(dBlog=>dBlog.id !== id); 
    localStorage.setItem('blogs',JSON.stringify(remaining)); 
    toast.success('Successfully Delete Bookmarked')
}