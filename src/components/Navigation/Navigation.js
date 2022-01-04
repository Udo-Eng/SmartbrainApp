import './Navigation.css';


const Navigation = ({ onRouteChange, isSignedIn, resetState }) => {

    const NavFunc = () => {
        resetState();
        onRouteChange('signin')
    }
    // debugger;
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>

                <p className='f3 dim link pa3 pointer white underline' onClick={() => onRouteChange('signin')}>Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p className='f3 dim link pa3 pointer white underline' onClick={() => NavFunc()}>Sign In </p>
                <p className='f3 dim link pa3 pointer white underline' onClick={() => onRouteChange('register')}>Register</p>
            </nav>
        );
    }

}

export default Navigation;