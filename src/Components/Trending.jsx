import { useState , useEffect } from 'react';
import { Box1, Box2, Box3, Box4 } from '../../public/assets';
// Import Swiper Moduels
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
// Import Axios API
import axios from "axios";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

const Trending = () => {
    const Api_Key = '&api_key=db440912d17a65099b000c34c18a0853';
    const Base_Link = 'https://api.themoviedb.org/3';
    const Films_Link = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(Base_Link + Films_Link + Api_Key)
        .then(res => {
            setMovies(res.data.results);
        }).catch(error => {
            console.log(error);
        })
    },[])
    return (
        <section className='bg-black h-full'>
            <div className='h-[2.5px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full'></div>
            <div className='container mx-auto!'>
                <div className='mx-[5%]! pt-15!'>
                    <h2 className='text-white font-bold text-[23px] mb-5!'>Trending Now</h2>
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
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Navigation , Autoplay]}
                            className="mySwiper">
                            {movies.map(movie => (
                                <SwiperSlide key={movie.id}>
                                    <img className='rounded-2xl' loading='lazy' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                    <div className='mt-15!'>
                        <h2 className='text-white font-bold text-[23px] mb-5!'>More Reasons to Join</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>
                            <div className='p-5! bg-gradient-to-b from-[#192044] to-[#20101D] rounded-2xl'>
                                    <div className='h-[150px]'>
                                        <h4 className='text-[21px] font-bold mb-2!'>Enjoy on your TV</h4>
                                        <p className='text-gray-500'>Watch on Smart TVs, Playstation,Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                                    </div>
                                    <div className='flex justify-end items-end'>
                                        <img className='h-full' src={Box4} alt="Image-Error" />
                                    </div>
                            </div>
                            <div className='p-5! bg-gradient-to-b from-[#192044] to-[#20101D] rounded-2xl'>
                                    <div className='h-[150px]'>
                                        <h4 className='text-[21px] font-bold mb-2!'>Download your shows to watch offline</h4>
                                        <p className='text-gray-500'>Save your favorites easily and always have something to watch.</p>
                                    </div>
                                    <div className='flex justify-end'>
                                        <img src={Box1} alt="Image-Error" />
                                    </div>
                            </div>
                            <div className='p-5! bg-gradient-to-b from-[#192044] to-[#20101D] rounded-2xl'>
                                    <div className='h-[150px]'>
                                        <h4 className='text-[21px] font-bold mb-2!'>Watch everywhere</h4>
                                        <p className='text-gray-500'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                                    </div>
                                    <div className='flex justify-end'>
                                        <img src={Box3} alt="Image-Error" />
                                    </div>
                            </div>
                            <div className='p-5! bg-gradient-to-b from-[#192044] to-[#20101D] rounded-2xl'>
                                    <div className='h-[150px]'>
                                        <h4 className='text-[21px] font-bold mb-2!'>Create profiles for kids</h4>
                                        <p className='text-gray-500'>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                                    </div>
                                    <div className='flex justify-end'>
                                        <img src={Box2} alt="Image-Error" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending