import { Search } from "lucide-react";

export default function HeroWithFilter() {
    return (
        <section className="bg-[url(./assets/images/hero.png)] h-[400px] md:h-[596px] bg-cover w-full md:w-[95%] mx-auto relative">
            <h1 className="text-2xl sm:text-3xl md:text-big-heading text-white w-[90%] md:w-[30%] mx-auto text-center pt-16 md:pt-32">
                MADE FOR THOSE WHO DO
            </h1>
            <form className="bg-navy-blue w-[98%] sm:w-[90%] mx-auto py-4 sm:py-6 px-3 sm:px-6 md:px-10 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between rounded-md absolute -bottom-16 sm:-bottom-12 left-1/2 -translate-x-1/2">
                <div className="flex flex-col w-full md:w-[30%]">
                    <label className="text-white mb-1" htmlFor="type">Looking for</label>
                    <select name="type" id="type" className="bg-white p-2 rounded-md">
                        <option defaultValue disabled>Choose event type</option>
                        <option value="drama">Drama</option>
                        <option value="tech">Tech</option>
                    </select>
                </div>
                <div className="flex flex-col w-full md:w-[30%]">
                    <label className="text-white mb-1" htmlFor="location">Location</label>
                    <select name="location" id="location" className="bg-white p-2 rounded-md">
                        <option defaultValue disabled>Choose location</option>
                        <option value="accra">Accra</option>
                        <option value="kumasi">Kumasi</option>
                    </select>
                </div>
                <div className="flex flex-col w-full md:w-[30%]">
                    <label className="text-white mb-1" htmlFor="when">When</label>
                    <input type="datetime-local" name="when" id="when" className="bg-white p-1.5 rounded-md" />
                </div>
                <button
                    type="submit"
                    className="bg-primary text-white w-full md:w-auto h-12 flex flex-row justify-center items-center rounded-md mt-2 md:mt-0"
                    aria-label="Search"
                >
                    <Search />
                </button>
            </form>
        </section>
    );
}