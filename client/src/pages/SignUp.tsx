import { useState, FormEvent, ChangeEvent } from "react";

const Signup = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        password: ''
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSignupData({
        ...signupData,
        [name]: value
        });
    };
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch ('/users',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(signupData)
            });
            const data = await response.json();
            console.log('User created successfully:',data);
            alert('User created successfully:');
        } catch (error) {
            console.error('Error:',error);
            alert('Failed to create user.');
        }
        console.log(signupData);
    };
    
    return (
        <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <label >Username</label>
            <input 
            type='text'
            name='username'
            value={signupData.username || ''}
            onChange={handleChange}
            />
            <label>Password</label>
            <input 
            type='password'
            name='password'
            value={signupData.password || ''}
            onChange={handleChange}
            />
            <button type='submit'>Submit Form</button>
        </form>
        </div>
    )
};

export default Signup;