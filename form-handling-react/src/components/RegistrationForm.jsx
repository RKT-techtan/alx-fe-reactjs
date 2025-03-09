import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData, setErrors] = useState({ username: '', password: '', email: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
	if (!username) return <div>Loading...</div>;
	if (!email) return <div>Loading...</div>;
	if (!password) return <div>Loading...</div>;


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"

                name="email"
                value={email}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};


export default RegistrationForm;
