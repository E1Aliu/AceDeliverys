import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './styles/authForms.scss'
import {BiUser, BiEnvelope} from 'react-icons/bi'
import {VscLock} from 'react-icons/vsc'

const SignupForm = () => {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className='form-container'>
        <form action=''>
            <div className='logo'></div>
            <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">Welcome to AceDelivery</h1>
            <p> 
                Create a new account or
                <Link to='/Login'> Log In</Link>
            </p>
            <div className='inner-input-content'>
                    <span><BiUser /></span>
                    <input
                        type='text'
                        name='fullname'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder='Enter full name'
                        className='auth-form-input'
                    />
                </div>

                <div className='inner-input-content'>
                    <span><BiEnvelope /></span>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter email'
                        className='auth-form-input'
                    />
                </div>

                <div className='inner-input-content'>
                    <span><VscLock /></span>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password'
                        className='auth-form-input'
                    />
                </div>

                <div className='inner-input-content'>
                    <span><VscLock /></span>
                    <input
                        type='password'
                        name='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Confirm password'
                        className='auth-form-input'
                    />
                </div>


                <div className='agree-terms-row'>
                    <div className='inner-row'>
                        <input type='checkbox' name='agree-terms' id='agree-terms' />
                        <label htmlFor='agree-terms' className='form-label-checkbox'>
                            I agree to the  
                            <Link to='/'> Terms </Link> &  
                            <Link to='/'> Privacy Policy</Link>.
                        </label>
                    </div>
                </div>

                <button type='submit' className='submit-button'>Sign Up</button>
        </form>
    </div>
    )
}

export default SignupForm
