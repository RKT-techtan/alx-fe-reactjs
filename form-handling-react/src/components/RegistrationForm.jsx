import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
	    <input
	        type="password"
	        name="password"
	        value={formData.password}
	        onChange={handleChange}
	    />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};


export default RegistrationForm;
