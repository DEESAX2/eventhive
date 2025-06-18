import CollegeCard from "./CollegeCard";

export default function TrendingColleges() {
    return (
        <section className="mt-5 w-[90%] mx-auto">
            <h1 className="gap-2 font-bold">
                <span>Trending</span>
                <span className="text-primary">colleges</span>
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <CollegeCard key={n} />)}
            </div>
            <div>
                <button>Load more...</button>
            </div>
        </section>
    );
}