import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";
import banner from "../assets/images/banner.png";
import google from "../assets/images/google.png";
import spotify from "../assets/images/spotify.png";
import stripe from "../assets/images/stripe.png";
import microsoft from "../assets/images/microsoft.png";
import uber from "../assets/images/uber.png";
import youtube from "../assets/images/youtube.png";
import zoom from "../assets/images/zoom.png";
import grab from "../assets/images/grab.png";
import medium from "../assets/images/medium.png";


export default function Home() {
    return (
        <>
            <Navbar />
            <HeroWithFilter />
            <UpcomingEvents />

    <section className="relative bg-navy-blue w-[90%] h-[295px] py-2 px-10 mt-20 left-[5%]">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 ">

            <div className="w-[50%] md:w-2/5 lg:w-1/2 flex justify-center">
                <img src={banner} alt="Event Visual" className="w-full max-w-[544px] h-[315px] object-cover   transform -translate-y-8" />
            </div>
            <div className="w-full md:w-3/5 lg:w-1/2 text-center md:text-left">
                <h2 className="text-4xl md:text-big-heading font-bold leading-tight text-white mb-6">
                    Make your own Event
                </h2>
                <p className="text-sub-heading text-grey mb-10 opacity-90 max-w-lg md:max-w-none mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                </p>
                <button className=" inline-block  px-10 py-4  bg-primary   text-white font-bold text-lg rounded-md  shadow-xl hover:brightness-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#7848F4] focus:ring-opacity-50"><Link to= "/create-event">
                 Create Events</Link></button>
                </div>
                </div>
                </div>
            </section>

            {/* Join these brands section goes here */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-big-heading text-center mb-6 md:mb-8">
                        Join these <span className="text-primary">brands</span>
                    </h2>


                    <p className="text-lg md:text-xl font-semibold leading-normal text-sub-heading text-center mb-12 max-w-3xl mx-auto opacity-90">
                        We've had the pleasure of working with industry-defining brands. These are just some of them.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">

                        {[
                            { src: spotify, alt: "Brand Spotify Logo" },
                            { src: google, alt: "Brand Google Logo" },
                            { src: stripe, alt: "Brand Stripe Logo" },
                            { src: youtube, alt: "Brand Youtube Logo" }, 
                            { src: microsoft, alt: "Brand Microsoft Logo" },
                            { src: medium, alt: "Brand Medium Logo" },
                            { src: zoom, alt: "Brand Zoom Logo" },
                            { src: uber, alt: "Brand Uber Logo" },
                            { src: grab, alt: "Brand Grab Logo" },
                        ].map((brand, index) => (
                            <div
                                key={index} className="flex justify-center items-center p-4">
                                <img src={brand.src} alt={brand.alt} className="max-w-full h-auto  max-h-24 object-contain  hover:grayscale-0 transition-all duration-300 " />
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <TrendingColleges/>
            <OurBlogs />
            <Footer />
        </>
    );
}