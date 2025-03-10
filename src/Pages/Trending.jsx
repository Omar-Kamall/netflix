import Data from "../Components/Data"

const Trending = () => {
    const link = "/trending/movie/day?language=en-US";
    return (
        <section className="bg-black pt-13!">
            <Data kind={link}/>
        </section>
    )
}

export default Trending