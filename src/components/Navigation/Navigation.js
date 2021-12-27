import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
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
                <p className='f3 dim link pa3 pointer white underline' onClick={() => onRouteChange('signin')}>Sign In </p>
                <p className='f3 dim link pa3 pointer white underline' onClick={() => onRouteChange('register')}>Register</p>
            </nav>
        );
    }

}

export default Navigation;