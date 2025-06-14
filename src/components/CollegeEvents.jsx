import event1 from "../assets/images/event1.png";
import React from "react";

const events = [
    {
        id: 1,
        image: event1,
        title: "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
        date: "Saturday, March 18, 3:30PM",
        location: "ONLINE EVENT - Attend anywhere",
    },
    {
        id: 2,
        image: event1,
        title: "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
        date: "Saturday, March 18, 3:30PM",
        location: "ONLINE EVENT - Attend anywhere",
    },
    {
        id: 3,
        image: event1,
        title: "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
        date: "Saturday, March 18, 3:30PM",
        location: "ONLINE EVENT - Attend anywhere",
    },
    {
        id: 4,
        image: event1,
        title: "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
        date: "Saturday, March 18, 3:30PM",
        location: "ONLINE EVENT - Attend anywhere",
    },
    {
        id: 5,
        image: event1,
        title: "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
        date: "Saturday, March 18, 3:30PM",
        location: "ONLINE EVENT - Attend anywhere",
    },
    {
        id: 6,
        image: event1,
        title: "BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow",
        date: "Saturday, March 18, 3:30PM",
        location: "ONLINE EVENT - Attend anywhere",
    },
];

export default function CollegeEvents() {
    return (
        <div className="min-h-screen bg-gray-50 px-10 py-10">
            <h2 className="text-3xl font-semibold mb-8">
                College <span className="text-[#7848F4]">Events</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-white rounded-lg shadow p-4">
                        {/* FREE Badge */}
                        <div className="mb-4 relative">
                            <span className="absolute top-2 left-2 bg-purple-100 text-[#7848F4] text-xs px-2 py-1 rounded">
                                FREE
                            </span>
                            <img src={event.image} alt="Event" className="w-full h-48 object-cover rounded" />
                        </div>

                        {/* Event Details */}
                        <h3 className="text-md font-medium mb-2">{event.title}</h3>
                        <p className="text-sm text-[#7848F4]">{event.date}</p>
                        <p className="text-xs text-gray-500">{event.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}