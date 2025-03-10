import { Link } from "react-router-dom";

const Foot = () => {
    return (
        <footer className="bg-black">
            <div className="container mx-auto!">
                <div className="mx-[5%]!">
                    <div className="text-gray-400 z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-5!">
                        <div className="flex flex-col gap-3">
                            <Link className="hover:text-red-600 transform duration-300">FAQ</Link>
                            <Link className="hover:text-red-600 transform duration-300">Investor Relations</Link>
                            <Link className="hover:text-red-600 transform duration-300">Privacy</Link>
                            <Link className="hover:text-red-600 transform duration-300">Speed Test</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link className="hover:text-red-600 transform duration-300">Help Center</Link>
                            <Link className="hover:text-red-600 transform duration-300">Jobs</Link>
                            <Link className="hover:text-red-600 transform duration-300">Cookie Preferences</Link>
                            <Link className="hover:text-red-600 transform duration-300">Legal Notices</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link className="hover:text-red-600 transform duration-300">Account</Link>
                            <Link className="hover:text-red-600 transform duration-300">Ways to Watch</Link>
                            <Link className="hover:text-red-600 transform duration-300">Corporate Information</Link>
                            <Link className="hover:text-red-600 transform duration-300">Only on Netflix</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link className="hover:text-red-600 transform duration-300">Media Center</Link>
                            <Link className="hover:text-red-600 transform duration-300">Terms of Use</Link>
                            <Link className="hover:text-red-600 transform duration-300">Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10! pb-5!">
                        <h2 className="text-gray-400 hover:text-red-600 transform duration-300 cursor-pointer">Netflix Algalabah Developed By Omar Kamal</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Foot