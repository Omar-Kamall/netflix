import { lazy, Suspense } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Head = lazy(() => import ("../Components/Head"));
const Trending = lazy(() => import ("../Components/Trending"));
const AboutUs = lazy(() => import ("../Components/AboutUs"));
const Foot = lazy(() => import ("../Components/Foot"));

const Display = () => {
    return (
        <>
            <Suspense fallback={<div className='bg-black h-[100vh] flex justify-center items-center'>
                <FadeLoader color='red'/></div>}>
                    <Head/>
                    <Trending/>
                    <AboutUs/>
                    <Foot/>
            </Suspense>
        </>
    )
}

export default Display