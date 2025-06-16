import { Link } from "react-router";


export default function Navbar() {
    return (
        <nav className="flex justify-between px-8 py-4">
            <h1 className="font-bold text-heading">
             <span><Link to= "/">Event</Link></span>
                <span className="text-primary"><Link to= "/" >Hive </Link> </span> 
            </h1>
            <div className="flex justify-center gap-4">
                <button className="text-primary"><Link to="/login">Login</Link></button>
                <button className="bg-primary rounded-md py-2 px-4 text-white"><Link to="/register">Signup</Link></button>
            </div>
        </nav>
    );
}