import { Link } from "react-router";
import { imageBaseURL } from "../api/client";


export default function EventCard({event}) {
    return (
        <div className="relative px-3 py-3 rounded-md">
            <img src={`${imageBaseURL}/${event.image}`} alt="Event Card" className="rounded-md" />
        <Link to={`/view-event?id=${event.id}`} className="text-base font-medium text-primary"> {event.title}</Link>
            <h2>Saturday, March 18, 9.30PM</h2>
            <h3>ONLINE EVENT - Attend anywhere</h3>
            <button className="bg-primary rounded-full p-2 px-3 scroll-py-2.5 text-white"><Link to ="/view-event">View Event</Link></button>
        </div> 
    );
}
// export default function EventCard({ event }) {
//   return (
//     <div key={event.id} className="bg-white rounded-lg shadow p-4">
//       {/* FREE Badge */}
//       <div className="mb-4 relative">
//         <span className="absolute top-2 left-2 bg-purple-100 text-[#7848F4] text-xs px-2 py-1 rounded">
//           FREE
//         </span>
//         <img
//           src={event.image}
//           alt="Event"
//           className="w-full h-48 object-cover rounded"
//         />
//       </div>

//       {/* Event Details */}
//       <h3 className="text-md font-medium mb-2">{event.title}</h3>
//       <p className="text-sm text-[#7848F4]">{event.date}</p>
//       <p className="text-xs text-gray-500">{event.location}</p>
//     </div>
//   );
// }
