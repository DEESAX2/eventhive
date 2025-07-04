import EventCard from "./EventCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { BeatLoader } from "react-spinners";


export default function UpcomingEvents() {

    const {data,isLoading,error}  = useSWR("/events?limit=6", apiFetcher);
    if (isLoading) {
        return(
            <div>
                <BeatLoader size={50} color="#4f46e5" />
            </div>
        );
    }
    
    if (error) {
        return(
            <div>
                <p>something is wrong</p>
            </div>
        );
    }
    return (
         <section className="mt-20 w-[95%] max-w-6xl mx-auto">
            <div>
                <h1 className="text-sub-heading font-bold text-2xl md:text-3xl mb-4">
                    <span>Upcoming</span>
                    <span className="text-primary"> Events</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-4 md:px-5 py-6 md:py-10">
                {data.data.map(event => <EventCard key={event.id} event={event} />)}
            </div>
            <div className="flex justify-center mt-4">
                <button className="px-8 py-2 bg-primary text-white font-bold text-base md:text-lg rounded-md shadow-xl hover:brightness-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#574c74] focus:ring-opacity-50">
                    Load more...
                </button>
            </div> 
        </section>
    );
}