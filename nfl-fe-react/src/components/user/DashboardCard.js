import React from "react";
import "../../styling/index.less";

const DashboardCard = (props) => {
    return (
    <div>
        <h3> Fan's dashboard</h3>
            {localStorage.getItem('fan-token') ? ( 
                    <div className="dashboard-card">
                        <img src="https://images.unsplash.com/flagged/photo-1568407431368-5ea1a07a4d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="profile" />
                        <div className="dashboard-card-text">
                            <div className="dashboard-text-left">
                                <h3>Name:</h3>
                                <h3>City:</h3>
                                <h3>State:</h3>
                                <h3>Email:</h3>
                            </div>
                            <div className="dashboard-text-right">
                                <h3>{props.fan.first_name} {props.fan.last_name}</h3>
                                <h3>{props.fan.city}</h3>
                                <h3>{props.fan.state}</h3>
                                <h3>{props.fan.email}</h3>
                            </div>
                        </div>
                    </div>
            ) : (
                <h4>Loading...</h4>
            )}
    </div>
    );
};

export default DashboardCard; 