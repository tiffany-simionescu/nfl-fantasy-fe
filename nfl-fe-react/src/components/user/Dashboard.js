import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import DashboardCard from "./DashboardCard.js"; 
import { connect } from 'react-redux';
import { fetchFan } from '../../actions/fan-actions';

const Dashboard = (props) => {

    // const [ fan, setFan] = useState([]); // getting all fans from database  

    // const all = `https://tacklemytrade-api.herokuapp.com/api/fans`; // normal  
    // fans/1 does work 

    useEffect(() => {
        if (!props.loggedIn) {
          props.fetchFan(props.fan.fan_id);
          console.log(props.fan)
        }
      }, [props.fan]);

    // useEffect (() => {
    //     axios 
    //     .get(all)
    //     .then(res => {
    //         setFan(res.data);
    //         res.data.map(fan => console.log(fan))
    //         console.log(res);
    //         })
    //         .catch(err => {
    //         console.error(err);
    //         })
    //     }, []);  

    return (
        <div className="Fan-Dashboard">
            {props.fan ? (
                <DashboardCard key={props.fan.fan_id} fan={props.fan} />
            ) : (
                <p>Loading...</p>
            )
                // (fan.map(fan => 
                // (users.filter(users => users.fan_id === `${userId.fan_id}` => 
            //         { 
            //     return(
            //         <DashboardCard key={fan.fan_id} fan={fan} />
            //     )
            // })) : (
            //     <h4> Is loading ...</h4>
            // ) 
        }

          {/* (users.filter(users => users.fan_id === ${userId.fan_id} =>  */}
        </div>
    )
}

// export default Dashboard; 

const mapStateToProps = state => {
    return {
        fan: state.fan,
        loggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, { fetchFan })(Dashboard);