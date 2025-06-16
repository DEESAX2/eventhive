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
