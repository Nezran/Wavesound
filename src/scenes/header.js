import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'
import moment from 'moment'
import Countdown from 'react-countdown-moment'
import Home from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';

const Buttons = () => {
    return(
        <Link to="/"><IconButton  style={{background:'#189cad'}} ><Home /></IconButton></Link>
    )
}


const user = () => {
    const now = moment();
    const endDate = moment(sessionStorage.getItem('expire_at'));
    const token = moment(sessionStorage.getItem('access_token'));

    return(
        <div>
            { token == null || endDate == null || now.isBefore(endDate) ?
                (
                    <p>
                        Expire dans :
                    <Countdown endDate={endDate}/>
                    </p>
                )
                :
                (
                    <a href="https://accounts.spotify.com/authorize?client_id=e9cf784964ce4b1985972061a744d5bc&redirect_uri=http://localhost:3000/auth/callback&scope=user-read-private%20user-read-email&response_type=token&state=123">Se connecter</a>
                )
            }
        </div>
    )
}

const Header = () => (
    <div>
        <AppBar
            title="WaveSound"
            iconElementLeft={<Buttons/>}
            iconElementRight={user()}
        />
    </div>
)

export default Header