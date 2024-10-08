// src/components/ServiceModal.js
import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast


const Modal = ({ isOpen, closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        service: '',
        budget: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Allow only numbers for the mobile input
        if (name === 'name') {
            const charValue = value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
            setFormData((prevData) => ({ ...prevData, [name]: charValue }));
        }
        else if (name === 'mobile' || name === 'budget') {
            const numericValue = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
            setFormData((prevData) => ({ ...prevData, [name]: numericValue }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.mobile.length !== 10) {
            console.error('Mobile number must be 10 digits long.');
            return;
        }
        // Print the form values to the console
        console.log('Form Data Submitted:', formData);

        // Show toast message
        toast.success("Your inquiry has been sent successfully!");

        // Optionally, you can reset the form or close the modal
        closeModal(); // Close modal after submission
        setFormData({
            name: '',
            mobile: '',
            service: '',
            budget: '',
        });
    };


    if (!isOpen) return null; // Don't render anything if the modal is not open

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
                <h3 className="text-lg font-semibold mb-4">Service Inquiry</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Mobile No</label>
                        <input
                            type="tel" // Changed to 'tel' for numeric keypad on mobile
                            name="mobile"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Your Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            pattern="\d{10}" // Regex pattern for 10 digits
                            maxLength="10" // Limit to 10 characters
                            required
                        />
                        <small className="text-gray-500">Enter a 10-digit mobile number.</small>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Service</label>
                        <select
                            name="service"
                            className="border border-white rounded-lg p-2 w-full"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a Service</option>
                            <option value="graphic-design">Graphic Design</option>
                            <option value="ui-ux-design">UI/UX Design</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="web-development">Web Development</option>
                            <option value="web-development">App Development</option>
                            <option value="web-development">SEO</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Budget</label>
                        <input
                            type="text"
                            name="budget"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                        />
                        <small className="text-gray-500">Enter budget in numbers only.</small>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={closeModal} className="mr-2 text-gray-600 hover:underline">Cancel</button>
                        <button type="submit" className="bg-blue-600 text-white rounded-lg px-4 py-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
