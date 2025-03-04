import { useState } from 'react';
import { Logo } from "../../public/assets";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BiShow, BiSolidHide } from 'react-icons/bi';
import { Link , useLocation , useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Signup = () => {
    const location = useLocation();
    const Navigate = useNavigate();
    const [hide , setHide] = useState(false);
    return (
        <section className="bg-white h-full w-full bg-cover bg-center">
            <div className="mx-[5%]!">
                <nav className="flex justify-between">
                    <div className="container mx-auto! flex justify-between items-center">
                        <Link to={"/"}><img className="w-30 md:w-45 h-20" src={Logo} alt="Img-Error" /></Link>
                        <Link className='text-black font-bold text-[20px] hover:text-red-500 transition duration-500' to={"/signin"}>Sign In</Link>
                    </div>
                </nav> <hr className='text-gray-200'/>
                <section className="flex justify-center mt-5!">
                    <Formik
                        initialValues={{password: ""}}
                        validationSchema={() => {
                            let schema = Yup.object({
                                password: Yup.string().matches(/^[a-zA-Z0-9-@]+$/, "Mustnot Be Add ( / ^ ] [ + $ / - ` ' )").min(8,'Must Be At Least 8 Characters Long').required('Enter Your Password')
                            })
                            return schema;
                        }}
                        onSubmit={(Values) => {
                            console.log(Values);
                            Navigate('/signin');
                        }}
                    >
                        <Form className="text-black mt-10! flex flex-col gap-2">
                            <h2 className="text-3xl font-bold text-start w-full">Welcome back!</h2>
                            <h2 className="text-3xl font-bold text-start w-full">Joining Netflix is easy.</h2>
                            <p className='text-[17px] mb-4! w-[90%]'>Enter your password and you'll be watching in no time.</p>
                            <div className="flex flex-col">
                                <label>Email</label>
                                <span className='font-bold'>{location.state.email}</span>
                            </div>
                            <div className="w-full">
                                <div className='relative'>
                                    <Field className="py-4! px-3! w-full text-black border border-[#3d3c3e] cursor-pointer rounded" type={hide ? "text" : "password"} name="password" placeholder="Enter Your Password"/>
                                    {hide ? <BiSolidHide className='absolute mr-2! top-1/2 transform -translate-y-1/2 right-0 cursor-pointer' onClick={() => setHide(false)} size={25} color='gray'/> : <BiShow className='absolute right-0 mr-2! top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={() => setHide(true)} size={25} color='gray'/>}
                                </div>
                                <ErrorMessage className='text-red-500 mt-1!' name="password" component="div"/>
                            </div>
                            <Link className='text-[#0071EC] mt-3! mb-3!'>Forgot password?</Link>
                            <button className="bg-red-600 w-full text-white text-[20px] px-5! py-3! font-bold hover:bg-red-700 transition duration-500 cursor-pointer rounded" type="submit">Sign Up</button>
                        </Form>
                    </Formik>
                </section>
            </div>
        </section>
    )
}

export default Signup