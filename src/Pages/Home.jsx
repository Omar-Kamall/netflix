import Data_All from "../Components/Data_All"

const Home = () => {
    const link = "/trending/movie/day?language=en-US";
    return (
        <section className="bg-black pt-18!">
            <Data_All kind={link} name="Trending Now" time={2000} to="trending"/>
            <Data_All kind={link} name="Popular Now" time={2300} to="popular"/>
            <Data_All kind={link} name="Action Now" time={2600} to="action"/>
            <Data_All kind={link} name="Drama Now" time={2900} to="drama"/>
        </section>
    )
}

export default Home