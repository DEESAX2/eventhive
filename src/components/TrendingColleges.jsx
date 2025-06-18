import CollegeCard from "./CollegeCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { ClipLoader } from "react-spinners";



export default function TrendingColleges() {
    // where "/colleges" is url
    // limit =3 will limit your cards to 3&& skip=4 means it should skip the first 4
    
    const { data, error, isLoading } = useSWR("/colleges?limit=3&skip=3", apiFetcher);
    console.log(data);


    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <ClipLoader size={100} />
            </div>
        )
    }

    if(error){
        return(
            <div>
                <p>Something is Wrong</p>
            </div>
        );
    }


    return (
        <section className="mt-5 w-[90%] mx-auto">
            <h1 className="gap-2 font-bold">
                <span>Trending</span>
                <span className="text-primary">colleges</span>
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {data.data.map(college => <CollegeCard key={college.id}
                    college={college} />
                )}
            </div>
            <div>
                <button>Load more...</button>
            </div>
        </section>
    );
}