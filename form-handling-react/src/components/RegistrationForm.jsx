import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        setErrors({ ...errors, [name]: '' }); // Clear error when input changes
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!formData.username) formErrors.username = 'Username is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (!formData.email) formErrors.email = 'Email is required';

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        console.log(formData);
        // Simulate API call (replace with your actual API call)
        setTimeout(() => {
          alert("Registration successful!");
        }, 500);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;
