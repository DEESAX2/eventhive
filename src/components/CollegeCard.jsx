import { Link } from "react-router";
import { imageBaseURL } from "../api/client";
export default function CollegeCard({college}) {
    return (
        <div>
            <img 
            src= {`${imageBaseURL}/${college.image}`} alt={college.name} className="rounded-md"/>
            <h1>{college.name}</h1>
            <h2>{college.address}</h2>
            <button className="bg-primary rounded-full p-2 px-3 scroll-py-2.5 text-white"><Link to ="/view-college">View College</Link></button>
        </div>
    );
}