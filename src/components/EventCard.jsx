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