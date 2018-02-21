import React from 'react'
import moment from 'moment'
import { Redirect } from 'react-router'

export default class Auth extends React.Component {

    constructor(props){
        super(props);
        const params = new URLSearchParams(this.props.location.hash);
        console.log(params)
        const access_token = params.get('#access_token');

        let m = moment().add("1",'hours').format();
        sessionStorage.setItem("access_token",access_token);
        console.log(m)
        sessionStorage.setItem("expire_at",m);

    }

    render() {
        return (
                <Redirect to="/"/>
        );
    }
}
