import Navbar from "../components/Navbar";

export default function CreateEvent() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-50 flex items-center justify-center min-h-screen">
                <div className="max-w-4xl w-full mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl text-center font-bold mb-8">Create Event</h1>
                    <form className="space-y-8">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Event Title</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your mail" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">Event Venue</label>
                            <input type="text" placeholder="Enter your mail" class="w-full p-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-medium">Start time</label>
                                <input type="text" placeholder="Enter your mail" class="w-full p-3 border border-gray-300 rounded-lg" />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">End time</label>
                                <input type="text" placeholder="Enter your mail" class="w-full p-3 border border-gray-300 rounded-lg" />
                            </div>
                        </div>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-medium">Start date</label>
                                <input type="text" placeholder="Enter your mail" class="w-full p-3 border border-gray-300 rounded-lg" />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">End date</label>
                                <input type="text" placeholder="Enter your mail" class="w-full p-3 border border-gray-300 rounded-lg" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-center mt-12">Event Description</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Event Image</label>
                            <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 mb-4">
                                <span>Image Placeholder</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Event Description</label>
                            <textarea placeholder="Type here...." className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                        </div>
                        <div className="mb-4">
                            <button type="submit" className=" w-full bg-purple-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-purple-700 transition duration-200">Create event
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    );
}