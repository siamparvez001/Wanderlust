import DestinationCard from "@/components/DestinationCard";
export const dynamic = 'force-dynamic';
const DestinationsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {cache:"no-store"})
    const destinations = await res.json()
    // console.log(destinations)
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold">All Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {
                    destinations.map(destination=>
                        <DestinationCard key={destination._id} destination={destination}></DestinationCard>
                    )
                }
            </div>
        </div>
    );
};

export default DestinationsPage;