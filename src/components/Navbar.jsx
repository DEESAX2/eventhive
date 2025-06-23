import { Link } from "react-router";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { useNavigate } from "react-router";


export default function Navbar() {
const navigate = useNavigate();
const {data} = useSWR("/users/profile", apiFetcher);

const logout = () => {
    localStorage.removeItem("ACCESS_TOKEN");

    navigate("/login");

}
    return (
        <nav className="flex justify-between px-8 py-4">
            <h1 className="font-bold text-heading">
             <span><Link to= "/">Event</Link></span>
                <span className="text-primary"><Link to= "/" >Hive </Link> </span>  
            </h1>
            <div>
                
            <h1>{data?.data?.name || "Unknown User"}</h1>
            <button className="bg-primary rounded-md py-1 px-4"  onClick ={logout}
            >logout</button>
            </div>
            <div className="flex justify-center gap-4">
                <button className="text-primary"><Link to="/login">Login</Link></button>
                <button className="bg-primary rounded-md py-2 px-4 text-white"><Link to="/register">Signup</Link></button>
            </div>
        </nav>
    );
}