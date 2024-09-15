import {React, useState} from "react";

function Map (){
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
        className={`border-solid border-2 rounded-lg ${isHovered ? 'border-sky-700 shadow-lg' : 'border-sky-500'}`}
        style={{
          transition: 'box-shadow 0.3s ease-in-out',
          boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30411.375457646518!2d75.29800373288067!3d17.677517218123814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4181b8db52943%3A0x1ab147f5432da578!2sPandharpur%2C%20Maharashtra%20413304!5e0!3m2!1sen!2sin!4v1722052185005!5m2!1sen!2sin"
          width="500"
          height="400"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    )
}

export default Map;