import { lazy , Suspense } from "react";
const Data = lazy(() => import ("../Components/Data"));
import FadeLoader from "react-spinners/FadeLoader";

const Trending = () => {
    const link = "/trending/movie/day?language=en-US";
    return (
        <section className="bg-black pt-13!">
            <Suspense fallback={<div className='bg-black h-[100vh] flex justify-center items-center'>
                <FadeLoader color='red'/></div>}>
                    <Data kind={link}/>
            </Suspense>
        </section>
    )
}

export default Trending