import React from 'react'
import {AiFillStar} from 'react-icons/ai'

import SignupForm from './SignupForm'
import './styles/authStyle.scss'
// import {SignupData1, SignupData2} from './data'

const SignupComponent = () => {
    return (
        <div className='shared-auth-component'>
            <div className='left-side'>

            </div>



            <div className='form-container'>
                <SignupForm />
            </div>
        </div>
    )
}

export default SignupComponent
