import Data from "../Components/Data"

const Drama = () => {
    const link = "/trending/movie/day?language=en-US";
    return (
        <section className="bg-black pt-13!">
            <Data kind={link}/>
        </section>
    )
}

export default Drama