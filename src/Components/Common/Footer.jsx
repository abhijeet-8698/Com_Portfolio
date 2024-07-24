import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Footer(props) {
    return (
        <>
            <div className="relative bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 transform rotate-45 opacity-25"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform rotate-45 opacity-25"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 transform rotate-45 opacity-25"></div>
                </div>
                <div className="relative container mx-auto px-6 py-12 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Column 1 - Logo and About */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold mb-4">{props.com}</h2>
                            <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat lectus et mauris maximus consequat.</p>
                        </div>

                        {/* Column 2 - Navigation Links */}
                        <div className="flex flex-col items-center md:justify-center">
                            <div className="mt-4 md:mt-0">
                                <div className="mb-2"><a href="#" className="text-white hover:text-blue-400 transition duration-300">Home</a></div>
                                <div className="mb-2"><a href="#" className="text-white hover:text-blue-400 transition duration-300">About</a></div>
                                <div className="mb-2"><a href="#" className="text-white hover:text-blue-400 transition duration-300">Services</a></div>
                                <div className="mb-2"><a href="#" className="text-white hover:text-blue-400 transition duration-300">Contact</a></div>
                                <div className="mb-2"><a href="#" className="text-white hover:text-blue-400 transition duration-300">Careers</a></div>
                            </div>
                        </div>

                        {/* Column 3 - Social Media Links */}
                        <div className="flex flex-col items-center md:justify-center">
                            <div className="text-2xl mb-4">Social Media</div>
                            <div className="flex items-center mb-2">
                                <InstagramIcon style={{ fontSize: 30 }} className="text-white mr-2" />
                                <a href="#" className="text-white hover:text-blue-400 transition duration-300">Instagram</a>
                            </div>
                            <div className="flex items-center mb-2">
                                <FacebookIcon style={{ fontSize: 30 }} className="text-white mr-2" />
                                <a href="#" className="text-white hover:text-blue-400 transition duration-300">Facebook</a>
                            </div>
                            <div className="flex items-center mb-2">
                                <WhatsAppIcon style={{ fontSize: 30 }} className="text-white mr-2" />
                                <a href="#" className="text-white hover:text-blue-400 transition duration-300">WhatsApp</a>
                            </div>
                            <div className="flex items-center">
                                <EmailIcon style={{ fontSize: 30 }} className="text-white mr-2" />
                                <a href="mailto:info@example.com" className="text-white hover:text-blue-400 transition duration-300">Email</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer with Animation */}
            <footer className="py-3 text-black text-center relative z-20">
                <div className="container mx-auto text-sm">
                    <p>&copy; 2024 {props.com}. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
