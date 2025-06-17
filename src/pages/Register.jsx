import registerImage from '../assets/images/register.png';
import SubmitButton from '../components/SubmitButton';
import { apiClient } from '../api/client';
import { useNavigate } from 'react-router';


export default function Register() {
    const navigate = useNavigate();


    const registerUser = async (data) => {
        try {
            const response = await apiClient.post("/users/register", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            console.log(response);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (

        // left side of the Register page
        <section>
            <div className='flex h-screen'>
                <div className='w-1/2 md:w-1/2 bg-cover bg-center flex flex-col justify-center items-center p-8 text-center' style={{ backgroundImage: `url(${registerImage})` }}>
                    <h1 className='text-white text-4xl md:text-5xl font-bold mb-6'>Welcome Back</h1>
                    <p className='text-md md:text-lg text-white mb-8'>To keep connected with us provide us with your information</p>
                    <button className='bg-zinc-500 text-white border border-white py-2 px-6 rounded hover:bg-lightwhite transition duration-200'>Sign In</button>
                </div>

                {/* Right side content */}
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white mt-8'>
                    <h3 className=' text-base font-semibold mb-8'><span className='text-purple-500'>Event</span> <span className='text-black'>Hive</span></h3>
                    <h1 className='text-4xl font-bold mb-6'>Sign Up to Event Hive</h1>

                    <div className='w-full max-w-sm'>
                        <form action={registerUser} className='mb-5' >
                            <div className='mb-4'>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>YOUR NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Enter your name'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>YOUR EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Enter your email'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500' />
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>PASSWORD</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Enter your password'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500' />
                            </div>
                            {/* <div className='mb-5'>
                                <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>CONFIRM PASSWORD</label>
                                <input type="password" id='password' placeholder='Enter your password' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500' />
                            </div> */}
                            <SubmitButton className='w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-200' title={"Sign Up"} />

                        </form>
                    </div>
                    <div className='flex items-center my-6 w-full max-w-sm'>
                        {/* or separator */}
                        <div className='flex-grow border-t border-gray-300'></div>
                        <span className='mx-4 text-gray-500'>Or</span>
                        <div className='flex-grow border-t border-gray-300'></div>
                    </div>

                    <button
                        className="w-full max-w-sm flex items-center justify-center border border-gray-300 py-2.5 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition-colors duration-200">
                        <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google icon" className="w-5 h-5 mr-2" />Sign Up with Google</button>
                </div>
            </div>
        </section>

    );
}