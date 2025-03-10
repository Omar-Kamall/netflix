import { useState , useEffect } from 'react';
import axios from 'axios';
import Home from '../Pages/Home';

const Data = (props) => {
    const [data , setData] = useState([]);
    const Api_Key = '&api_key=db440912d17a65099b000c34c18a0853';
    const Base_Link = 'https://api.themoviedb.org/3';
    const link = props.kind;
    useEffect (() => {
        axios.get(Base_Link + link + Api_Key)
        .then(res => {
            setData(res.data.results);
        })
        .catch(error => {
            console.log(error);
        })
    },[link])
    return (
        <section className='bg-black'>
            <div className='mx-[5%]!'>
                <div className="container mx-auto! pb-15! grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-10">
                    {data.map(item => (
                        <div className='pt-8! h-70 rounded-2xl' key={item.id}>
                            <img className='cursor-pointer h-70 w-full rounded-3xl' loading='lazy' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Image-Error" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Data