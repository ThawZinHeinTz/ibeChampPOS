import '../css/header.css'
import logo from '../assets/logo.png'
import ButtonProp from '../components/ui/ButtonProp.jsx'
import { useState } from 'react';

function Header({cashierName='Brian',isCashier,onUpdate}) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    

    const logOut = () => {
        alert('Logged Out!');
        setIsLoggedIn(!isLoggedIn)
    };

    const logIn = () => {
        alert('Logged In!');
        setIsLoggedIn(!isLoggedIn)
    };

    
    

    const logOutButton= <ButtonProp
                            btnId='headerButton'
                            btnType='button'
                            btnValue='Logout'
                            isDisabled='false'
                            clickHandler={logOut}
                            size='md'
                            color='danger'
                        />

    const logInButton = <ButtonProp
                            btnId='headerButton'
                            btnType='button'
                            btnValue='Log In'
                            isDisabled='false'
                            clickHandler={logIn}
                            size='md'
                            color='success'
                        />

    const switchView = <ButtonProp
                            btnId='headerButton'
                            btnType='button'
                            btnValue='Switch View'
                            isDisabled='false'
                            clickHandler={() => onUpdate(prevValue => !prevValue)}
                            size='md'
                            color='primary'
                        />

  return (
    <div className='header'>

        <div className='header-row'>
            <img className='logo' src={logo} alt="Image" />
        </div>

        <div className='header-row' id='header-mid'>
            {/* <span className='header-text'>Logged In Status {isLoggedIn?'Yes':'No'}</span> */}
            <span className='header-text'>{isCashier?'Cashier':'Customer'}</span>
            {switchView}
        </div>

    
        <div className='header-row' id='header-right'>
            {isCashier ? (
                <>
                    <span className='header-cashier-name'>
                        {isLoggedIn ? `Cashier: ${cashierName}` : ''}
                    </span> 
                    {isLoggedIn ? logOutButton : logInButton}
                </>
                    ) : (
                    ''
             )}
</div>

        
    </div>
  )
}

export default Header