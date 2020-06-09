import React, {useState, useEffect} from "react";
import axios from 'axios'; 
import DashboardCard from "./DashboardCard.js"; 

const Dashboard = (props) => {

    const [ userId, setUserId] = useState({
        fan_id: "",
        username: "", 
        first_name: "",
        last_name: "",
        city: "",
        state: "",
        email: ""
    }); // getting all fans from database  

    const fanUrl = `https://tacklemytrade-api.herokuapp.com/api/fans/${userId.fan_id}`; // props.fan_id // props.userId.fan_id // no! 

    const all = `https://tacklemytrade-api.herokuapp.com/api/fans`; // normal 

    useEffect (() => {
        axios 
        .get(`https://tacklemytrade-api.herokuapp.com/api/fans/?fan_id=${userId.fan_id}`)   //params used with ?... 
        .then(res => {
            setUserId(res.data);
            console.log(res); 
            })
            .catch(err => {
            console.error(err);
            })
        }, []);  

        // props.userId.map(userId => console.log(userId))

    return (
        <div className="Fan-Dashboard">
            <p> hello from div </p>
            <p> hello {props.first_name} </p>
            {/* {userId.map((fan, index) => (
                <DashboardCard key={index} fan={fan} />
            ))} */}
        </div>
    )
}

export default Dashboard; 