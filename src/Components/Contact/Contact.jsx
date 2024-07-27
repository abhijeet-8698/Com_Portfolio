import { React, useState } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Map from './Map'

export function ContactSection14() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleClick = () => {
    //     alert(formData.firstName, formData.lastName)
    // }

    const handleClick = () => {
        const { firstName, lastName, email, message } = formData;
        alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`);
    };

    return (
        <section className="px-6 py-6 border border-gray-600 rounded-lg shadow-lg mb-2">
            <div className="container mx-auto text-center">
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 text-3xl"
                >
                    Contact Us
                </Typography>
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 !text-3xl lg:!text-5xl"
                >
                    We&apos;re Here to Help You..!
                </Typography>
                <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                    Whether it&apos;s a question about our services, a request for
                    technical assistance, or suggestions for improvement, our team is
                    eager to hear from you.
                </Typography>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
                    <div className="w-full flex justify-center items-center">
                        <Map />
                    </div>

                    <form
                        action="#"
                        className="flex flex-col gap-3 max-w-lg w-full p-4 bg-white rounded-lg shadow-md mx-auto"
                    >
                        <Typography
                            variant="small"
                            className="text-left text-lg font-semibold text-gray-700"
                        >
                            Select Options for Business Engagement
                        </Typography>

                        <div className="flex gap-2">
                            <Button variant="outlined" className="flex-1">
                                General Inquiry
                            </Button>
                            <Button variant="outlined" className="flex-1">
                                Product Support
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2">
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-2 text-left text-base font-medium text-gray-900"
                                >
                                    First Name
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-gray-600 focus:ring-0"
                                    containerProps={{
                                        className: "w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-2 text-left text-base font-medium text-gray-900"
                                >
                                    Last Name
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-gray-600 focus:ring-0"
                                    containerProps={{
                                        className: "w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <Typography
                                variant="small"
                                className="mb-2 text-left text-base font-medium text-gray-900"
                            >
                                Your Email
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="name@email.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:border-gray-600 focus:ring-0"
                                containerProps={{
                                    className: "w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>

                        <div>
                            <Typography
                                variant="small"
                                className="mb-2 text-left text-base font-medium text-gray-900"
                            >
                                Your Message
                            </Typography>
                            <Textarea
                                rows={4}
                                color="gray"
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:border-gray-600 focus:ring-0"
                                containerProps={{
                                    className: "w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>

                        <Button
                            className="w-full py-3 text-lg font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={handleClick}>Send Message
                        </Button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default ContactSection14;