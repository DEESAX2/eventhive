import EventCard from "./EventCard";

export default function UpcomingEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <div>
                <h1>
                    <span>Upcoming</span>
                    <span>Events</span>
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>
            <div className="flex justify-center mt-4">
                <button className="px-10 py-2  bg-primary   text-white font-bold text-lg rounded-md  shadow-xl hover:brightness-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#7848F4] focus:ring-opacity-50 ">Load more...</button>
            </div> 
        </section>
    );
}