import { useState , useEffect } from 'react';
// Import Swiper Moduels
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../Components/styles.css';
import axios from 'axios';
import { Link } from 'react-router';


const Data_All = (props) => {
    const [show_Video , setShow_Video] = useState(false);
    const [data , setData] = useState([]);
    const [videoKey , setVideoKey] = useState(null);
    const Api_Key = '&api_key=db440912d17a65099b000c34c18a0853';
    const Base_Link = 'https://api.themoviedb.org/3';
    const link = props.kind;
    useEffect( () => {
        axios.get(Base_Link + link + Api_Key)
        .then(res => {
            setData(res.data.results);
        })
        .catch(error => {
            console.error(error);
        });
        setVideoKey("xkxnYxfrz4M?si=rEWtciSEtfkoCsLK");
    },[link])
    return (
        <section className="bg-black pb-8!">
            <div className='mx-[5%]!'>
                <Link to={props.to}><h2 className='text-white font-bold text-[23px] mb-5! hover:text-red-500'>{props.name}</h2></Link>
                <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            420:{
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1000: {
                                slidesPerView: 4,
                                spaceBetween: 40
                            },
                            1250: {
                                slidesPerView: 5,
                                spaceBetween: 50
                            }
                        }}
                        autoplay={{
                            delay: props.time,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Navigation , Autoplay]}
                        className="mySwiper">
                        {data.map(item => (
                            <SwiperSlide key={item.id}>
                                <img onClick={() => setShow_Video(true)} className='rounded-2xl' loading='lazy' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                            </SwiperSlide>
                        ))}
                </Swiper>
                {show_Video ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")}
                {show_Video && <div className='bg-black fixed inset-0 flex items-center justify-center h-full cursor-pointer z-50'>
                    <div className="absolute inset-0" onClick={() => setShow_Video(false)}></div>
                    <div className="relative mx-[5%]! mt-10! flex items-center w-full h-[55vh] md:h-[80vh]">
                        <iframe src={`https://www.youtube.com/embed/${videoKey}`} allowFullScreen className='w-full h-[55vh] md:h-[80vh] shadow-gray-700 shadow-lg rounded-2xl'></iframe>
                    </div>
                </div>}
            </div>
        </section>
    )
}

export default Data_All