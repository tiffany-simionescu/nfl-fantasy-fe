import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import DashboardCard from "./DashboardCard.js"; 
import { fetchFan } from '../../actions/fan-actions';
import { connect } from "react-redux";

const Dashboard = (props) => {

    const [ fan, setFan] = useState({
        fan_id: "",
        first_name: "",
        last_name: "",
        city: "",
        state: "",
        email: ""
    }); // getting all fans from database  

    const all = `https://tacklemytrade-api.herokuapp.com/api/fans`; // normal  
    // fans/1 does work 

    useEffect (() => {
        axios 
        .get(all)
        .then(res => {
            setFan(res.data.filter(fan => fan.fan_id === 1));
            console.log(fan);
            })
            .catch(err => {
            console.error(err);
            })
        }, []);  

    return (
        //  <div className="Fan-Dashboard">
        //     {props.fans.filter(fan => fan.isLoggedIn === true)  ? 
        //         (props.fans.filter(fan => fan.isLoggedIn === true).map((fan, index) => 
        //             // (props.fan.filter(fan => props.fan.includes(fan.fan_id)).map(fan => 
        //             { 
        //         return(            
        //             <DashboardCard key={index} fan={fan} />
        //         )
        //     })) : (
        //         <h4> Is loading ...</h4>
        //     ) 
        // }
        // </div>


        // <div className="Fan-Dashboard">
        //     {renderOnline}
        // </div>

        <div className="Fan-Dashboard">
            {fan.length > 0  ? 
                (fan.map(fan => 
                    { 
                return(
                    
                    <DashboardCard key={fan.fan_id} fan={fan} />
                )
            })) : (
                <h4> Is loading ...</h4>
            ) 
        }
        </div>
    )
}

// export default Dashboard; 

const mapStateToProps = state => {
    return {
        fan: state.fan,
        isLoggedIn: state.isLoggedIn
    };
};

export default connect(mapStateToProps, {})(Dashboard)