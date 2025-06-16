<<<<<<< HEAD
import { Link } from "react-router";
export default function EventCard() {
    return (
        <div className="">
            <img src={'https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnRzfGVufDB8fDB8fHww'} alt="Event Card" className="rounded-md" />
            <h1>BestSelller Book Bootcamp - Write, Market & Publish Your Book</h1>
            <h2>Saturday, March 18, 9.30PM</h2>
            <h3>ONLINE EVENT - Attend anywhere</h3>
            <button className="bg-primary rounded-full p-2 px-3 scroll-py-2.5 text-white"><Link to ="/view-event">View Event</Link></button>
        </div> 
    );
}
=======
export default function EventCard({ event }) {
  return (
    <div key={event.id} className="bg-white rounded-lg shadow p-4">
      {/* FREE Badge */}
      <div className="mb-4 relative">
        <span className="absolute top-2 left-2 bg-purple-100 text-[#7848F4] text-xs px-2 py-1 rounded">
          FREE
        </span>
        <img
          src={event.image}
          alt="Event"
          className="w-full h-48 object-cover rounded"
        />
      </div>

      {/* Event Details */}
      <h3 className="text-md font-medium mb-2">{event.title}</h3>
      <p className="text-sm text-[#7848F4]">{event.date}</p>
      <p className="text-xs text-gray-500">{event.location}</p>
    </div>
  );
}
>>>>>>> 27f8606aa19e2be30a355b06056e2480dc5b3acb
