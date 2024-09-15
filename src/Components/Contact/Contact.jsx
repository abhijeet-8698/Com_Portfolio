import React, { useState } from 'react';
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Map from './Map';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        <section className="px-4 py-4 rounded-lg shadow-lg mb-1">
            <ToastContainer />
            <div className="container mx-auto text-center">
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-1 text-3xl"
                >
                    Contact Us
                </Typography>

                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-1 text-3xl"
                >
                    We&apos;re Here to Help You..!
                </Typography>

                <p>----------------------------------------------</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-center ">
                    <div className="w-full flex justify-start items-stat">
                        <Map />
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-1 max-w-lg w-full p-4 bg-gray-200 rounded-lg shadow-md mx-auto"
                    >
                        <Typography
                            variant="small"
                            className="text-left text-lg font-semibold text-gray-700 mb-3"
                        >
                            Select Options for Business Engagement
                        </Typography>

                        <div className="flex gap-3 mb-3">
                            <Button
                                variant={selectedOption === 'General Inquiry' ? 'filled' : 'outlined'}
                                className="flex-1"
                                onClick={() => handleOptionClick('General Inquiry')}
                            >
                                General Inquiry
                            </Button>
                            <Button
                                variant={selectedOption === 'Product Support' ? 'filled' : 'outlined'}
                                className="flex-1"
                                onClick={() => handleOptionClick('Product Support')}
                            >
                                Product Support
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4 mb-3">
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-1 text-left text-base font-medium text-gray-900"
                                >
                                    First Name <span className="text-red-500">*</span>
                                </Typography>
                                <Input
                                    color="gray"
                                    size="md"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:border-gray-600 focus:ring-0"
                                    containerProps={{ className: "w-full" }}
                                    labelProps={{ className: "hidden" }}
                                    required
                                />
                            </div>
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-1 text-left text-base font-medium text-gray-900"
                                >
                                    Last Name <span className="text-red-500">*</span>
                                </Typography>
                                <Input
                                    color="gray"
                                    size="md"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:border-gray-600 focus:ring-0"
                                    containerProps={{ className: "w-full" }}
                                    labelProps={{ className: "hidden" }}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <Typography
                                variant="small"
                                className="mb-1 text-left text-base font-medium text-gray-900"
                            >
                                Email <span className="text-red-500">*</span>
                            </Typography>
                            <Input
                                color="gray"
                                size="md"
                                placeholder="name@email.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:border-gray-600 focus:ring-0"
                                containerProps={{ className: "w-full" }}
                                labelProps={{ className: "hidden" }}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <Typography
                                variant="small"
                                className="mb-1 text-left text-base font-medium text-gray-900"
                            >
                                Message <span className="text-red-500">*</span>
                            </Typography>
                            <Textarea
                                rows={3}
                                color="gray"
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:border-gray-600 focus:ring-0"
                                containerProps={{ className: "w-full" }}
                                labelProps={{ className: "hidden" }}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-2 text-lg font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
