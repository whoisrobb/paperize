import css from '../Login/index.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authErrorLightIcon from '../assets/authErrorLightIcon.svg';
import authSuccessLightIcon from '../assets/authSuccessLightIcon.svg';


const SignUp = () => {

    const [theme, setTheme] = useState('light'); 
    const navigate          = useNavigate();
    const redirectToLogin   = () => { navigate('/login/') };


    useEffect(() => {
        const savedTheme = localStorage.getItem('themePreference');
        if (savedTheme) { setTheme(theme); }
    }, [])


    return(
        
        <div className={`${css.authParentDiv} ${theme === 'light' ? css.lightTheme : css.darkTheme}`}> 
            <form className={css.authForm}>
                <h2>Create Account</h2>
                <input className={css.authFormInput} required autoComplete="off" placeholder="Username" type="text"/>
                <input className={css.authFormInput} required autoComplete="off" placeholder="Email" type="email"/>
                <input className={css.authFormInput} required autoComplete="off" placeholder="Password" type="password"/>
                <button className={css.authFormBtn} type="submit">Sign up</button>
                <div className={css.authFormLinkDiv}><a className={css.authFormLink} onClick={redirectToLogin}>Log In</a></div>

                <div className={css.authFormMessageParentDiv}> 
                    <div className={`${css.authFormMessageDiv} ${css.authSuccess}`}>
                        <img className={css.authFormSuccessIcon} src={authSuccessLightIcon} alt='auth-message-icon'/> 
                        <p className={css.authFormMessageText}>Successfully created an account.</p>
                    </div> 

                    <div className={`${css.authFormMessageDiv} ${css.authError}`}>
                        <img className={css.authFormSuccessIcon} src={authErrorLightIcon} alt='auth-message-icon'/> 
                        <p className={css.authFormMessageText}>Successfully created an account.</p>
                    </div>
                </div>
            </form> 
        </div>
    );
}

export default SignUp;