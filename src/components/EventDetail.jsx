import event from "../assets/images/event.png";


export default function EventDetail() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50">
            {/* Hero Section */}
            <section className="relative w-[90%] mx-auto">
                <img
                    src={event} // Replace with actual image path
                    alt="Event"
                    className="w-full h-[400px] object-cover"
                />
                {/* Event Details Overlay */}
                <div className="flex items-center justify-around absolute inset-0 bg-black/50">
                    <div className="flex flex-col justify-center text-white">
                        <button className="mb-10 flex item-center font-medium mt-1 text-sm bg-purple-600 px-4 py-1 rounded w-fit">&larr; Back</button>
                        <h2 className="text-4xl text-white font-bold mb-8">Dream world wide
                            <span className="block mt-3">in jakatra</span></h2>
                        <p className="text-xl mb-2 font-semibold mt-4">IIIT Sonepat</p>
                        <p className="mt-2 text-sm max-w-xl">
                            DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
                        </p>
                        <a href="#" class="mt-4 inline-block text-white underline">View map</a>
                    </div>


                    {/* Date & Time Card */}
                    <div className="bg-white text-black p-6 rounded shadow-lg w-64">
                        <p className="text-lg font-semibold text-black mb-2">Date & time</p>
                        <p className="text-gray-500 text-sm mt-1 mb-4">Saturday, March 18 2023, 9:30PM</p>
                        <a href="#" className="text-sm text-purple-600 mb-3 block">Add to calendar</a>
                        <button className="bg-purple-600 text-white w-full py-2 rounded mb-2">Book now</button>
                        <button className="bg-gray-200 w-full py-2 rounded text-sm mb-1">Program promoter</button>
                        <p className="text-xs text-gray-500 text-center">No Refunds</p>
                    </div>
                </div>
            </section>

            {/* Event Info Section */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Description</h3>
                    <p className="mb-6">
                        DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
                    </p>
                    <p className="mb-6">
                        DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement
                    </p>

                    <h4 className="font-semibold mb-4">Hours</h4>
                    <p className="text-purple-600 mb-4">Weekdays hour: 7PM - 10PM</p>
                    <p className="text-purple-600 mb-6">Sunday hour: 7PM - 10PM</p>

                    <h4 className="font-semibold mb-1">Organizer Contact</h4>
                    <a
                        href="https://www.sneakypeeks.com"
                        className="text-blue-600 text-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Please go to <span className="text-purple-600">www.sneakypeeks.com</span> and refer the FAQ section for more detail
                    </a>
                </div>

                {/* Right Column */}
                <div>
                    <h4 className="font-semibold mb-2">Event location</h4>
                    <div className="bg-gray-200 h-40 w-full mb-4 rounded"></div>
                    <p className="text-sm text-gray-600 mb-4">
                        Dummy location generation model by RSU ... Our approach generates more realistic dummy
                        locations
                    </p>

                    <div className="mb-4">
                        <h4 className="font-semibold mb-2">Tags</h4>
                        {["Indonesia event", "Jaskaran event", "UI", "Jaskaran event", "Seminar"].map((tag, index) => (
                            <span
                                key={index}
                                className="inline-block bg-gray-100 text-xs px-2 py-1 rounded mr-2 mb-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex space-x-3 mt-2">
                        <a href="#" className="text-blue-500 text-xl">🌐</a>
                        <a href="#" className="text-green-500 text-xl">🟢</a>
                        <a href="#" className="text-blue-700 text-xl">🔵</a>
                        <a href="#" className="text-blue-400 text-xl">🐦</a>
                    </div>
                </div>
            </div>

            {/* Other Events Section */}
            {/* <div className="bg-gray-100 py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-xl font-semibold mb-6">Other events you may like</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="bg-white p-4 rounded shadow">
                                <img
                                    src="/event-hero.jpg"
                                    alt="Event"
                                    className="rounded h-40 w-full object-cover mb-3"
                                />
                                <p className="text-xs text-purple-600 font-semibold">FREE</p>
                                <h4 className="font-semibold text-sm mt-2">BestSeller Book Bootcamp</h4>
                                <p className="text-xs text-gray-500 mb-2">Saturday, March 18, 9:30PM</p>
                                <p className="text-xs text-gray-400">ONLINE EVENT · Attend anywhere</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    );
}