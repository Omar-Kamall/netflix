import { lazy , Suspense } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
const Data_All = lazy(() => import ("../Components/Data_All"))

const Home = () => {
    const link = "/trending/movie/day?language=en-US";
    return (
        <section className="bg-black pt-18!">
            <Suspense fallback={<div className='bg-black h-[100vh] flex justify-center items-center'>
                <FadeLoader color='red'/></div>}>
                    <Data_All kind={link} name="Trending Now" time={2000} to="trending"/>
                    <Data_All kind={link} name="Popular Now" time={2300} to="popular"/>
                    <Data_All kind={link} name="Action Now" time={2600} to="action"/>
                    <Data_All kind={link} name="Drama Now" time={2900} to="drama"/>
            </Suspense>
        </section>
    )
}

export default Home