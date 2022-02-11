import React from 'react';
import Navbar from '../../components/shared/NavBar/Navbar';
import SignupComponent from '../../components/pages/Auth/SignupComponent'
import Footer from '../../components/shared/Footer/Footer';

const SignUp =()=> {
    return(
        <div className='Home-Page'>
            <Navbar/>
            <SignupComponent/>
            <Footer/>
        </div>
    )
}
export default SignUp;
