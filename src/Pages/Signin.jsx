import { useState } from 'react';
import { Logo } from "../../public/assets";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BiShow, BiSolidHide } from 'react-icons/bi';
import { Link , useNavigate } from "react-router-dom";
import * as Yup from "yup";
import '../App.css';

const Signin = () => {
    const Navigate = useNavigate();
    const [hide , setHide] = useState(false);
    return (
        <section className="bg-black h-full w-full bg-cover bg-center signin">
            <div className="bg-[rgba(0,0,0,0.60)] pb-12!">
                <div className="mx-[5%]!">
                    <nav>
                        <div className="container mx-auto! flex justify-between">
                            <Link to={"/"}><img className="w-30 md:w-45 h-20" src={Logo} alt="Img-Error" /></Link>
                        </div>
                    </nav>
                    <section className="flex justify-center items-center h-[80vh] mt-5!">
                        <Formik
                            initialValues={{email: "" , password: ""}}
                            validationSchema={() => {
                                let userSchema = Yup.object({
                                    email: Yup.string().matches(/^[a-zA-Z0-9-@.]+$/, "Mustnot Be Add ( / ^ ] [ + $ / - ` ' )").email('Must Be Contain @').required('Email Is Required'),
                                    password: Yup.string().matches(/^[a-zA-Z0-9-@]+$/, "Mustnot Be Add ( / ^ ] [ + $ / - ` ' )").min(8,'Must Be At Least 8 Characters Long').required('Password Is Required')
                                })
                                return userSchema
                            }}
                            onSubmit={(Values , { resetForm }) => {
                                console.log(Values);
                                Navigate('/home');
                                resetForm();
                            }}
                        >
                            <Form className="bg-[#00000089] py-8! px-12! flex flex-col justify-center items-center gap-4">
                                <h2 className="text-3xl font-bold text-start w-full">Sign In</h2>
                                <div className="w-full">
                                    <Field className="py-3! px-3! w-full text-white border-2 border-[#3d3c3e] cursor-pointer rounded" type="text" name="email" placeholder="Email Address"/>
                                    <ErrorMessage className='text-red-500 mt-1!' name="email" component="div"/>
                                </div>
                                <div className="w-full">
                                    <div className='relative'>
                                        <Field className="py-3! px-3! w-full text-white border-2 border-[#3d3c3e] cursor-pointer rounded" type={hide ? "text" : "password"} name="password" placeholder="Password"/>
                                        {hide ? <BiSolidHide className='absolute mr-2! top-1/2 transform -translate-y-1/2 right-0 cursor-pointer' onClick={() => setHide(false)} size={25} color='gray'/> : <BiShow className='absolute right-0 mr-2! top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={() => setHide(true)} size={25} color='gray'/>}
                                    </div>
                                    <ErrorMessage className='text-red-500 mt-1!' name="password" component="div"/>
                                </div>
                                <button className="bg-red-600 w-full text-white px-5! py-2! font-bold hover:bg-red-800 transition duration-500 cursor-pointer rounded" type="submit">Sign In</button>
                                <span>OR</span>
                                <button className="bg-[#3c3c3c] w-full text-white px-5! py-2! font-bold hover:bg-[#2A2A2A] transition duration-500 cursor-pointer rounded" type="button">Use a Sign-in Code</button>
                                <Link className='hover:text-red-500 transition duration-500'>Forgot password?</Link>
                                <div className="flex justify-start w-full">
                                    <input id="RemmberMe" className="mx-2! cursor-pointer" type="checkbox" name="checkbox"/>
                                    <label className="text-[15px] cursor-pointer" htmlFor="RemmberMe">Remmber Me</label>
                                    <ErrorMessage name="checkbox" component="div"/>
                                </div>
                                <div className="flex justify-start w-full">
                                    <span className="text-gray-400 mr-1!">New to Netflix?</span>
                                    <Link className='hover:text-red-500 transition duration-500' to={"/"}>Sign up now.</Link>
                                </div>
                                <p className="text-gray-400 text-[12px]">This page is protected by Google reCAPTCHA to ensure <br/> you're not a bot.</p>
                            </Form>
                        </Formik>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Signin