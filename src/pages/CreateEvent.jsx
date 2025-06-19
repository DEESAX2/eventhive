import Navbar from "../components/Navbar";
import useSWR from "swr";
import { apiFetcher, apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router";

export default function CreateEvent() {
    const navigate = useNavigate();
    const { data, isLoading, error } = useSWR('/colleges', apiFetcher);

    const postEvent = async (data) => {
        try {
            const response = await apiClient.post('/events', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                }
            });
            console.log(response.data);
            navigate(`/view-event?id=${response.data.data.id}`);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <Navbar />
            <section className="bg-gray-50 flex items-center justify-center min-h-screen">
                <div className="max-w-4xl w-full mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
                    <h1 className="text-big-heading text-center font-bold mb-8">Create Event</h1>
                    <form action={postEvent} className="space-y-8">
                        <div className="mb-4 flex flex-col">
                            <label htmlFor="Event Title" className="block text-gray-700 font-medium mb-2">Select College</label>
                            <select name="college" id="" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter event title">
                                {isLoading ? <option value="">loading...</option> :
                                    error ? <option value="">something went wrong</option> :
                                        data.data.map((college) => {
                                            return <option key={college.id} value={college.id}>{college.name}</option>
                                        })}
                            </select>

                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Event Title</label>
                            <input type="text" name="title" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter event title" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-1 font-medium">Event Venue</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" name="venue" />
                            {/* <select className="w-full p-3 border border-gray-300 rounded-lg" name="venue" id="">
                                <option value="">Accra</option>
                                <option value="">Kumasi</option>
                                <option value="">Ta</option>
                            </select> */}
                        </div>

                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-medium">Start date</label>
                                <input type="datetime-local" name="start" placeholder="Enter your mail" class="w-full p-3 border border-gray-300 rounded-lg" />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">End date</label>
                                <input type="datetime-local" name="end" placeholder="Enter your mail" class="w-full p-3 border border-gray-300 rounded-lg" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-semibold text-center mt-12">Event Description</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Event Image</label>
                            <input type="file" name="image" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4" />
                            <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 mb-4">
                                <span>Image Placeholder</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Event Description</label>
                            <textarea placeholder="Type here...." name="description" className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                        </div>
                        <div className="mb-4">
                            <h2>Event Tag</h2>
                            <select multiple className="border border-none bg-white h-40 rounded-md w-full p-3" name="tags" id="">
                                <option value="social">Social</option>
                                <option value="sports">Sports</option>
                                <option value="cultural">Cultural</option>
                                <option value="academic">Academic</option>
                                <option value="technical">Technical</option>
                                <option value="other">Other</option>
                            </select>

                            <SubmitButton title="Create Event" className="w-full bg-purple-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-purple-700 transition  duration-200 mt-4" />
                        </div>


                    </form>
                </div>
            </section>
        </>
    );
}