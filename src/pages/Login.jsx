import React from 'react';
import loginImage from '../assets/images/login.png';



export default function Login() {
    return (

        <div>
            <div className="flex min-h-screen bg-white">
                {/* Left Column: Login In Form */}
                <div className="w-1/2 flex flex-col justify-center items-center p-8 lg:p-16"> 
                    <h4 className="text-2xl font-bold mb-8 text-black">Event Hive</h4> 
                    <h1 className="text-4xl font-semibold mb-16 text-black">Sign In to Event Hive</h1> 

                    <form className="w-full max-w-sm"> 
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">YOUR EMAIL</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-event-gray-border rounded-md focus:outline-none focus:ring-2 focus:ring-event-purple-light"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-black mb-1">PASSWORD</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-event-gray-border rounded-md focus:outline-none focus:ring-2 focus:ring-event-purple-light"
                            />
                            <a href="#" className="text-sm text-event-purple-light hover:underline mt-2 block text-right">Forgot your password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-1/2 bg-event bg-purple-800 text-white py-2 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-event-purple-light focus:ring-opacity-50 transition-colors duration-200 m-20" >Sign In</button>
                    </form>

                    <div className="flex items-center my-6 w-full max-w-sm"> 
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-black">Or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <button
                        className="w-full max-w-sm flex items-center justify-center border border-gray-300 py-2.5 rounded-md text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition-colors duration-200"
                    >
                        <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google icon" className="w-5 h-5 mr-2" />Sign Up with Google</button>
                </div>

                {/* Right Column: Image Section */}
                <div className="w-1/2 relative flex items-center justify-center bg-event-purple-dark text-white p-8 overflow-hidden">
                    <img src={loginImage} alt="Login Image" className="absolute inset-0 w-full h-full object-cover z-0" />

                    <div className='absolute inset-0 bg-black z-10 opacity-50'></div>
                   
                    <div className="relative z-10 text-center" >
                        <h1 className="text-5xl font-bold mb-4">Hello Friend</h1>
                        <p className="text-lg mb-8">To keep connected with us provide us with your information</p>
                        <button className="bg-zinc-600 text-event-purple-dark px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors duration-200">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}