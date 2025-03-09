import { useState } from 'react';


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
                value="username"
                value={formData.name}
                onChange={handleChange}
            />
	    <input
	        type="password"
	        value="password"
	        value="formData.name"
	        onChange={handleChange}
	    />
            <input
                type="email"
                value="email"
                value={formData.email}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};


export default RegistrationForm;
