import EventCard from "./EventCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { BeatLoader } from "react-spinners";


export default function SimilarEvents() {
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
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="text-xl font-semibold mb-6">Other events you may like</h1>
            <div className="grid grid-cols-3 gap-5 ">
                {data.data.map(event => <EventCard key={event.id} event={event} />)}
            </div>
        </section>
    );
}