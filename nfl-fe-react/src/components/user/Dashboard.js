import React, {useState, useEffect} from "react";
import axios from 'axios'; 
import DashboardCard from "./DashboardCard.js"; 

const Dashboard = () => {

    // const [ userId, setUserId] = useState({
    //     fan_id: ""
    // }); // getting all fans from database  

    const [ userId, setUserId] = useState([]);

    const fansUrl = ("https://tacklemytrade-api.herokuapp.com/api/fans"); 

// ${userId.fan_id}`

    useEffect (() => {
        axios 
        .get(fansUrl) 
        .then(res => {
            setUserId(res.data);
            console.log(res); 
            })
            .catch(err => {
            console.error(err);
            })
        }, []);  

        userId.map(userId => console.log(userId))

    return (
        <div className="Fan-Dashboard">
            {userId.map((fan, index) => (
                <DashboardCard key={index} fan={fan} />
            ))}
        </div>
    )
}

export default Dashboard; 