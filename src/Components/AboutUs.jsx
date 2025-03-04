import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AboutUs = () => {
    const navigate = useNavigate();
    const [show1 , setShow1] = useState(false);
    const [show2 , setShow2] = useState(false);
    const [show3 , setShow3] = useState(false);
    const [show4 , setShow4] = useState(false);
    const [show5 , setShow5] = useState(false);
    const [show6 , setShow6] = useState(false);
    return (
        <section className="bg-black pb-15! pt-15!">
            <div className="container mx-auto! grid grid-cols-1">
                <div className="mx-[5%]!">
                    <h2 className='text-white font-bold text-[23px] mb-5!'>Frequently Asked Questions</h2>
                    <div className="mb-2!">
                        <div className="bg-[#202020] flex justify-between items-center px-5! py-4! hover:bg-[#414141] transform duration-500 cursor-pointer rounded">
                            <h6 className="text-[20px]">What is Netflix?</h6>
                            {!show1 ? <span onClick={() => {setShow1(true) ; setShow2(false) ; setShow3(false); setShow4(false); setShow5(false); setShow6(false);}}><IoAddOutline size={35} /></span> : <span onClick={() => setShow1(false)}><IoMdClose size={35} /></span>}
                        </div>
                        <div className={`bg-[#202020] mt-1! justify-between items-center px-5! py-4! rounded ${!show1 ? "hidden" : "flex"} cursor-pointer`}>
                            <p className="text-[20px]">
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br /><br />
                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </p>
                        </div>
                    </div>
                    <div className="mb-2!">
                        <div className="bg-[#202020] flex justify-between items-center px-5! py-4! rounded hover:bg-[#414141] transform duration-500 cursor-pointer">
                            <h6 className="text-[20px]">How much does Netflix cost?</h6>
                            {!show2 ? <span onClick={() => {setShow1(false) ; setShow2(true) ; setShow3(false); setShow4(false); setShow5(false); setShow6(false);}}><IoAddOutline size={35} /></span> : <span onClick={() => setShow2(false)}><IoMdClose size={35} /></span>}
                        </div>
                        <div className={`bg-[#202020] mt-1! justify-between items-center px-5! py-4! rounded ${!show2 ? "hidden" : "flex"} cursor-pointer`}>
                            <p className="text-[20px]">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP 100 to EGP 240 a month. No extra costs, no contracts.
                            </p>
                        </div>
                    </div>
                    <div className="mb-2!">
                        <div className="bg-[#202020] flex justify-between items-center px-5! py-4! rounded hover:bg-[#414141] transform duration-500 cursor-pointer">
                            <h6 className="text-[20px]">Where can I watch?</h6>
                            {!show3 ? <span onClick={() => {setShow1(false) ; setShow2(false) ; setShow3(true); setShow4(false); setShow5(false); setShow6(false);}}><IoAddOutline size={35} /></span> : <span onClick={() => setShow3(false)}><IoMdClose size={35} /></span>}
                        </div>
                        <div className={`bg-[#202020] mt-1! justify-between items-center px-5! py-4! rounded ${!show3 ? "hidden" : "flex"} cursor-pointer`}>
                            <p className="text-[20px]">
                                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /><br />
                                You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </p>
                        </div>
                    </div>
                    <div className="mb-2!">
                        <div className="bg-[#202020] flex justify-between items-center px-5! py-4! rounded hover:bg-[#414141] transform duration-500 cursor-pointer">
                            <h6 className="text-[20px]">How do I cancel?</h6>
                            {!show4 ? <span onClick={() => {setShow1(false) ; setShow2(false) ; setShow3(false); setShow4(true); setShow5(false); setShow6(false);}}><IoAddOutline size={35} /></span> : <span onClick={() => setShow4(false)}><IoMdClose size={35} /></span>}
                        </div>
                        <div className={`bg-[#202020] mt-1! justify-between items-center px-5! py-4! rounded ${!show4 ? "hidden" : "flex"} cursor-pointer`}>
                            <p className="text-[20px]">
                                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </p>
                        </div>
                    </div>
                    <div className="mb-2!">
                        <div className="bg-[#202020] flex justify-between items-center px-5! py-4! rounded hover:bg-[#414141] transform duration-500 cursor-pointer">
                            <h6 className="text-[20px]">What can I watch on Netflix?</h6>
                            {!show5 ? <span onClick={() => {setShow1(false) ; setShow2(false) ; setShow3(false); setShow4(false); setShow5(true); setShow6(false);}}><IoAddOutline size={35} /></span> : <span onClick={() => setShow5(false)}><IoMdClose size={35} /></span>}
                        </div>
                        <div className={`bg-[#202020] mt-1! justify-between items-center px-5! py-4! rounded ${!show5 ? "hidden" : "flex"} cursor-pointer`}>
                            <p className="text-[20px]">
                                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#202020] flex justify-between items-center px-5! py-4! rounded hover:bg-[#414141] transform duration-500 cursor-pointer">
                            <h6 className="text-[20px]">Is Netflix good for kids?</h6>
                            {!show6 ? <span onClick={() => {setShow1(false) ; setShow2(false) ; setShow3(false); setShow4(false); setShow5(false); setShow6(true);}}><IoAddOutline size={35} /></span> : <span onClick={() => setShow6(false)}><IoMdClose size={35} /></span>}
                        </div>
                        <div className={`bg-[#202020] mt-1! justify-between items-center px-5! py-4! rounded ${!show6 ? "hidden" : "flex"} cursor-pointer`}>
                            <p className="text-[20px]">
                                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br /><br />
                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </p>
                        </div>
                    </div>
                    <div className="text-center pt-15!">
                        <p className="mb-5!">Ready to watch? Enter your email to create or restart your membership.</p>
                        <Formik
                            initialValues={{email: ""}}
                            validationSchema={() => {
                                let schema = Yup.object({
                                    email: Yup.string().matches(/^[a-zA-Z0-9-@.]+$/, "Mustnot Be Add ( / ^ ] [ + $ / - ` ' )").email('Must Be Contain @').required('Email Is Required'),
                                })
                                return schema
                            }}
                            onSubmit={(Values) => {
                                console.log(Values);
                                navigate('/signup' , { state: { email: Values.email } });
                            }}
                        >
                            <Form className="flex flex-wrap justify-center gap-5">
                                <div className="text-start">
                                    <Field className="py-3! px-3! md:w-95 w-80 h-14 text-white border border-white cursor-pointer rounded" type="text" name="email" placeholder="Email Address"/>
                                    <ErrorMessage className='text-red-500 mt-1!' name="email" component="div"/>
                                </div>
                                <button className="bg-red-600 w-50 h-14 text-white px-5! py-2! font-extrabold text-2xl hover:bg-red-800 transition duration-500 cursor-pointer rounded" type="submit">Get Started </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs