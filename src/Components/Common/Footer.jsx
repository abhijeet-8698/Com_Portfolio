import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer(props) {

    return (
        <>
            <div className="w-full h-[22.4vh] bg-black">
                <div className="text-white">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="grid justify-center Items-center">
                            <div href="#" className="text-xl grid justify-center mt-3">
                                SpyTech IT Solutions
                            </div>
                            <div>
                                Something About Comp
                            </div>
                        </div>
                        <div className="flex justify-center Items-center">
                            <div className="mt-1 p-1">
                                <div>Home</div>
                                <div>About</div>
                                <div>Services</div>
                                <div>Contact</div>
                                <div>Careers</div>
                            </div>
                        </div>
                        <div className="grid justify-center Items-center">
                            <div className="mt-[7%] text-xl">Social Media</div>
                            <div>
                                <div className="flex gap-3 mt-[12%]">{<InstagramIcon />}
                                    <div>Instagram</div>
                                </div>
                                <div className="flex gap-3 mt-[12%]">{<FacebookIcon />}
                                    <div>Facebook</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-3 text-white text-center bg-gradient-to-r from-sky-500 to-indigo-500">
                <div className="container mx-auto text-md">
                    <p>&copy; 2024 {props.company} . All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;