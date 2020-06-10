import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import DashboardCard from "./DashboardCard.js"; 

const Dashboard = (props) => {

    const [ users, setUsers] = useState([]); // getting all fans from database  

    const all = `https://tacklemytrade-api.herokuapp.com/api/fans`; // normal  
    // fans/1 does work 

    useEffect (() => {
        axios 
        .get(all)
        .then(res => {
            setUsers(res.data);
            res.data.map(users => console.log(users))
            console.log(res);
            })
            .catch(err => {
            console.error(err);
            })
        }, []);  

    return (
        <div className="Fan-Dashboard">
            {users.length > 0  ? 
                (users.map(users => 
                // (users.filter(users => users.fan_id === `${userId.fan_id}` => 
                    { 
                return(
                    <DashboardCard key={users.fan_id} users={users} />
                )
            })) : (
                <h4> Is loading ...</h4>
            ) 
        }

          {/* (users.filter(users => users.fan_id === ${userId.fan_id} =>  */}
        </div>
    )
}

export default Dashboard; 