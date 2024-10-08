import React from "react";
import Lottie from "react-lottie";
import animationData from "./Load.json"; // Ensure this path is correct

function Loader() {
    const defaultOptions = {
        loop: true, // Loop the animation
        autoplay: true, // Autoplay the animation
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="flex justify-center items-center h-sceen">
            <Lottie options={defaultOptions}
                height={500} 
                width={300}  
            />
        </div>
    );
}

export default Loader;
