import React, {useState, useEffect} from "react";
import axios from 'axios'; 

const Dashboard = (props) => {

    const [ userId, setUserId] = useState([]); // getting all fans from database  

    useEffect (() => {
        axios 
        .get("https://tacklemytrade-api.herokuapp.com/api/fans") 
        .then(res => {
            setUserId(res.data);
            console.log(res); 
            })
            .catch(err => {
            console.error(err);
            })
        }, []);  

    return (
        <div className="Fan-Dashboard">
            <h3> Fan's dashboard</h3>
            {localStorage.getItem('fan-token')  ?
            (<p>Hello {props.first_name}!</p> 
            ) : (
            <h4>Loading...</h4>
            )
            }
        </div>
    )
}

export default Dashboard; 