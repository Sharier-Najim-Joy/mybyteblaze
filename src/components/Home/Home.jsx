import { Link } from "react-router-dom";
import wave from '../../assets/wave.svg';
const Home = () => {
    return (
        <div className="hero min-h-[calc(100vh-120px)] relative">
            <div className="hero-content text-center -mt-32">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">Welcome to <span className="text-4xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">ByteBlaze</span>
                    </h1>
                    <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/blogs" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Read Blogs</span>
                        </Link>
                        <Link to="/bookmarks" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Bookmarks</span>
                        </Link>
                    </div>
                </div>
            </div>
            <img src={wave} className="w-full absolute bottom-0" alt="" />
        </div>
    );
};

export default Home;