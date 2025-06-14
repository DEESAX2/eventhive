import React from "react";
import notFoundImage from "../assets/images/notfound.png";
import Footer from "../components/Footer.jsx";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import CollegeEvents from "../components/CollegeEvents.jsx";

export default function NotFound() {
    return (
        <div>
        <div className="min-h-screen flex flex-col justify-between bg-white">
            {/* Navbar */}
            <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
                <h1 className="text-2xl font-bold">Event <span className="text-[#7848F4]">Hive</span></h1>
                <div className="space-x-4">
                    <button className="text-gray-700 hover:text-[#7848F4]">Login</button>
                    <button className="bg-[#7848F4] text-white px-4 py-2 rounded hover:bg-purple-700">Signup</button>
                </div>
            </header>
            {/* Main Content */}
            <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
                <div className="flex items-center justify-center space-x-4 text-8xl font-bold">
                    <span className="relative">
                        <img  src={notFoundImage} alt="404 Illustration" className="w-[722px] h-[392px] inline-block"/>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm"></span>
                    </span>
                </div>
                {/* Oops Message */}
                <h2 className="text-2xl font-semibold mt-8">Oops!</h2>
                <p className="text-gray-600 mt-2 mb-6">We can't seem to find the page you are looking for</p>
                {/* Back to Homepage Button */}
                <a href="/" className="bg-[#7848F4] text-white px-6 py-3 rounded-full w-[206px] hover:bg-purple-700">Back to Homepage</a>
            </main>
            {/* Footer */}
            <footer className="flex flex-col items-center py-6 bg-white space-y-4">
                <p className="text-gray-700">Follow us on</p>
                <div className="flex space-x-4">
                    <a href="#" className="bg-purple-100 text-[#7848F4] p-3 rounded-xl text-xl hover:bg-purple-200">
                        <FaInstagram /></a>
                    <a href="#" className="bg-purple-100 text-[#7848F4] p-3 rounded-xl text-xl hover:bg-purple-200">
                        <FaFacebookF /></a>
                    <a href="#" className="bg-purple-100 text-[#7848F4] p-3 rounded-xl text-xl hover:bg-purple-200">
                        <FaLinkedinIn /></a>
                    <a href="#" className="bg-purple-100 text-[#7848F4] p-3 rounded-xl text-xl hover:bg-purple-200">
                        <FaTwitter /></a>
                    <a href="#" className="bg-purple-100 text-[#7848F4] p-3 rounded-xl text-xl hover:bg-purple-200">
                        <FaYoutube /></a>
                </div>
            </footer>
        </div>
        <Footer/>
        </div>

        
    );
}