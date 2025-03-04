import { Img_Head, Logo } from "../../public/assets"
import { Link , useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const Head = () => {
    const navigate = useNavigate();
    return (
        <header style={{background: `url(${Img_Head})`}} className="h-full w-full bg-cover bg-center">
            <div className="bg-[rgba(0,0,0,0.74)]">
                <div className="mx-[5%]!">
                    <nav>
                        <div className="container mx-auto! flex justify-between">
                            <div><img className="w-30 md:w-45 h-20" src={Logo} alt="Img-Error" /></div>
                            <div className="mt-4! flex items-center gap-5">
                                <select className="px-2! py-1! text-white cursor-pointer border-2 border-gray-400 focus:outline-white rounded">
                                    <option className="text-black" value="English">EN</option>
                                    <option className="text-black" value="العربية">AR</option>
                                </select>
                                <Link to="/signin"><button className="bg-red-600 text-white font-bold px-4! py-1! hover:bg-red-800 transition duration-500 cursor-pointer rounded">Sign In</button></Link>
                            </div>
                        </div>
                    </nav>
                    <header className="loading flex justify-center items-center flex-col h-[87vh]">
                        <div className="text-center text-white">
                            <h1 className="font-bold text-3xl md:text-6xl mb-5!">Unlimited movies, TV<br/>shows, and more</h1>
                            <span className="text-1xl md:text-2xl font-bold">Starts For Free. Cancel anytime.</span>
                            <p className="mb-5! mt-5!">Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <div>
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
                                    navigate('/signup',{ state: {email: Values.email} });
                                }}
                            >
                                <Form className="flex flex-wrap justify-center gap-5">
                                    <div>
                                        <Field className="py-3! px-3! md:w-95 w-80 h-14 text-white border border-white cursor-pointer rounded" type="text" name="email" placeholder="Email Address"/>
                                        <ErrorMessage className='text-red-500 mt-1!' name="email" component="div"/>
                                    </div>
                                    <button className="bg-red-600 w-50 h-14 text-white px-5! py-2! font-extrabold text-2xl hover:bg-red-800 transition duration-500 cursor-pointer rounded" type="submit">Get Started </button>
                                </Form>
                            </Formik>
                        </div>
                    </header>
                </div>
            </div>
        </header>
    )
}

export default Head