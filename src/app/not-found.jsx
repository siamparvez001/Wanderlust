// import Link from 'next/link';

import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden relative">
            
            <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
            <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

            <div className="relative z-10 text-center max-w-2xl">
                
                <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    404
                </h1>

                <h2 className="text-3xl md:text-5xl font-bold mt-4">
                    Oops! Page Not Found
                </h2>

                
                <p className="text-gray-400 mt-5 text-lg leading-relaxed">
                    The page you are looking for does not exist or has been moved.
                    Maybe the URL is broken or the page was removed.
                </p>

               
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <Link
                        to="/"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30 font-semibold"
                    >
                        Back To Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-all duration-300 font-semibold"
                    >
                        Go Back
                    </button>
                </div>
                <p className="mt-12 text-sm text-gray-600">
                    Lost in space 
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;