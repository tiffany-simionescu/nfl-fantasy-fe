import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import DashboardCard from "./DashboardCard.js"; 

const Dashboard = (props) => {

    const [ fan, setFan] = useState({
        fan_id: "",
        first_name: "",
        last_name: "",
        city: "",
        state: "",
        email: ""
    });  

    const all = `https://tacklemytrade-api.herokuapp.com/api/fans`;

    useEffect (() => {
        axios 
        .get(all)
        .then(res => {
            setFan(res.data.filter(fan => fan.username === localStorage.getItem('username')));
            console.log(props.fan);
            })
            .catch(err => {
            console.error(err);
            })
        }, []);  

    return (
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

export default Dashboard; 