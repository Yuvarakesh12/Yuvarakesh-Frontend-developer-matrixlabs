import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row w-full bg-black p-5">
        <div className="w-full flex flex-col justify-center items-center md:items-start md:w-1/2 p-4">
            <div className="flex items-center">
                <img 
                    src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729058533/Group_20_nvbhgk.png" 
                    alt="Logo" 
                    className="mr-2" // Adds some margin to the right of the logo
                />
                <h1 className="text-white text-2xl">Ethai</h1>
            </div>
            <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white text-2xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white text-2xl" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-2xl" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white text-2xl" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-2xl" />
                </a>
            </div>
        </div>
        <div className="hidden md:flex w-full md:w-1/2 p-4 justify-center">
            <div>
                <h1 className="text-white text-2xl font-[Roboto]">“Designed for traders of <br/>
                today, just like you."</h1>
                <div className="relative w-full max-w-[400px] rounded-all shadow-md p-1.5 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                        {/* Optional icon here */}
                    </div>
                    <input
                        type="text"
                        className="w-full pl-8 pr-24 py-3 text-base text-[#EFEFE8] bg-black border-white border-[1px] rounded-lg focus:outline-none"
                        placeholder="What's your work email?"
                    />
                    <button className="absolute right-1 top-1 bottom-1 px-2 bg-[#B0FAFFB2] m-2 rounded-md">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
    

    );
};

export default Footer;
