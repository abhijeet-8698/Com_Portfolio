import React, { useState } from 'react';
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Map from './Map';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneIcon from '@mui/icons-material/Phone';


function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        engagementType: ''
    });

    const [selectedOption, setSelectedOption] = useState(''); // state for selected option

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Dont touch here
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setFormData((prevData) => ({
            ...prevData,
            engagementType: option
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/mjkbydkp', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                    engagementType: ''
                }); // for the Clear form fields()
            } else {
                toast.error('Failed to send the message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast('An error occurred. Please try again.');
        }
    };

    return (

        <section className="px-4 py-4 rounded-lg shadow-lg mb-2">
            <ToastContainer />
            <div className="container mx-auto text-center mt-2">
                <Typography variant="h5" color="blue" className="mb-2 text-2xl font-bold">
                    <PhoneIcon style={{ marginRight: '8px' }} /> {/* Calling icon with spacing */}
                    Contact Us
                </Typography>

                <Typography variant="h2" color="blue-gray" className="mb-2 text-lg font-semibold">
                    We’re Here to Assist You!
                </Typography>
                {/* <div className="border-b border-blue-500 mb-2"></div> */}

                <div className="flex flex-col lg:flex-row gap-4 items-center mt-2.5">
                    {/* Map Section */}
                    <div className="flex justify-center w-full max-w-full lg:w-1/2 mb-2 lg:mb-0">
                        <Map />
                    </div>

                    {/* Form Section */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full lg:w-1/2 p-6 border-2 border-blue-300 rounded-lg shadow-md mx-auto">
                        <Typography variant="small" className="text-left text-base font-semibold text-blue-700">
                            Choose Your Inquiry
                        </Typography>

                        <div className="flex flex-col md:flex-row gap-4 mb-2">
                            <Button
                                variant={selectedOption === 'General Inquiry' ? 'filled' : 'outlined'}
                                className={`flex-1 ${selectedOption === 'General Inquiry' ? 'bg-blue-600 text-white' : 'border-blue-600 text-blue-600'}`}
                                onClick={() => handleOptionClick('General Inquiry')}
                            >
                                General Inquiry
                            </Button>
                            <Button
                                variant={selectedOption === 'Product Support' ? 'filled' : 'outlined'}
                                className={`flex-1 ${selectedOption === 'Product Support' ? 'bg-blue-600 text-white' : 'border-blue-600 text-blue-600'}`}
                                onClick={() => handleOptionClick('Product Support')}
                            >
                                Product Support
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
                            <div>
                                <Typography variant="small" className="mb-1 text-left text-sm font-medium text-blue-900">
                                    First Name
                                </Typography>
                                <Input
                                    color="blue"
                                    size="md"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-blue-300 rounded-md focus:border-blue-500 focus:ring-0"

                                />
                            </div>
                            <div>
                                <Typography variant="small" className="mb-1 text-left text-sm font-medium text-blue-900">
                                    Last Name
                                </Typography>
                                <Input
                                    color="blue"
                                    size="md"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-blue-300 rounded-md focus:border-blue-500 focus:ring-0"
                                />
                            </div>
                        </div>

                        <div className="mb-2">
                            <Typography variant="small" className="mb-1 text-left text-sm font-medium text-blue-900">
                                Email
                            </Typography>
                            <Input
                                color="blue"
                                size="md"
                                placeholder="name@email.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-blue-300 rounded-md focus:border-blue-500 focus:ring-0"
                            />
                        </div>

                        <div className="mb-2">
                            <Typography variant="small" className="mb-1 text-left text-sm font-medium text-blue-900">
                                Message
                            </Typography>
                            <Textarea
                                rows={3}
                                color="blue"
                                placeholder="Your message here..."
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border border-blue-300 rounded-md focus:border-blue-500 focus:ring-0"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
