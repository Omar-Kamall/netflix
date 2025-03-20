import { lazy, Suspense } from "react";
import FadeLoader from "react-spinners/FadeLoader";
const Data = lazy(() => import ("../Components/Data"))

const Drama = () => {
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

export default Drama