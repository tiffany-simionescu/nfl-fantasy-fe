import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import DashboardCard from "./DashboardCard.js"; 
import { connect } from "react-redux";

const Dashboard = (props) => { 

    const [ fan, setFan] = useState(props.fan);

    const all = `https://tacklemytrade-api.herokuapp.com/api/fans`; 

    useEffect (() => {
        axios 
        .get(all)
        .then(res => {
            setFan(res.data.filter(fan => fan.username === props.fan.username));
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

const mapStateToProps = state => {
    return {
        fan: state.fan
    }
}

export default connect(mapStateToProps, {})(Dashboard)