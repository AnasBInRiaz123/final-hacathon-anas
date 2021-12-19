import React from 'react';
import '../styles/HotelStyle.css'
import { useHistory } from 'react-router-dom';
import Orders from './Requests';
// import button from 'styles'
// import User from '../images/kishan.jpg'
// import data from '../data/data.json'
class Admin extends React.Component {
    click1 = () => {

        this.props.history.push(`/requests`);


    }
    click2 = () => {

        this.props.history.push(`/CheckRequest`);


    }
    click3 = () => {

        this.props.history.push(`/branchTab`);


    }
    render() {
        return (
            <div id='back'>
                <div className="nav">
                    <div id="logo">
                        <h2>SAYLANI FOOD DRIVE</h2>
                    </div>

                    
                    <div id="user">
                        <div className="name">Hello, ADMIN</div>
                    </div>
                </div>

                <div className="maincart">


                    <br />
                    <br />

                    <button id='pay' onClick={this.click1}>Request Tab</button>
                    <br />

                    <button id="pay" onClick={this.click2}>Approved and Rejected Request</button>
                    <br />
                    <button id="pay" onClick={this.click3}>Branch Manager Tab</button>

                </div>
            </div>
        )
    };
}

export default Admin;