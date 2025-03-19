import { useState , useEffect } from 'react';
import axios from 'axios';

const Data = (props) => {
    const [show_Video , setShow_Video] = useState(false);
    const [data , setData] = useState([]);
    const [videoKey , setVideoKey] = useState(null);
    const Api_Key = '&api_key=db440912d17a65099b000c34c18a0853';
    const Base_Link = 'https://api.themoviedb.org/3';
    const Img = props.kind;
    useEffect (() => {
        axios.get(Base_Link + Img + Api_Key)
        .then(res => {
            setData(res.data.results);
            console.log(res.data.results);
        })
        .catch(error => {
            console.log(error);
        });
        setVideoKey("jBM7idslG6I?si=VAtajrt8Nmt_Dnh_");
    },[Img])
    return (
        <section className='bg-black'>
            <div className='mx-[5%]!'>
                <div className="container mx-auto! pb-15!">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-10">
                        {data.map(item => (
                            <div className='pt-8! h-70 rounded-2xl' key={item.id}>
                                <img onClick={() => setShow_Video(true)} className='cursor-pointer h-70 w-full rounded-3xl' loading='lazy' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Image-Error" />
                            </div>
                        ))}
                    </div>
                    {show_Video ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")}
                    {show_Video && <div className='bg-black fixed inset-0 flex items-center justify-center h-full cursor-pointer z-50'>
                        <div className="absolute inset-0" onClick={() => setShow_Video(false)}></div>
                        <div className="relative mx-[5%]! mt-10! flex items-center w-full h-[55vh] md:h-[80vh]">
                            <iframe src={`https://www.youtube.com/embed/${videoKey}`} allowFullScreen className='w-full h-[55vh] md:h-[80vh] shadow-gray-700 shadow-lg rounded-2xl'></iframe>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Data