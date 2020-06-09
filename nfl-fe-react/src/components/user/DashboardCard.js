import React from "react";


const DashboardCard = (props) => {
    return (
    <div>
        <h3> Fan's dashboard</h3>
                    {localStorage.getItem('fan-token')  ?
                    (<p>Hello {props.first_name}!</p> 
                    ) : (
                    <h4>Loading...</h4>
                    )
                    }
                    <p> Hello,,,, {props.userId.first_name}!</p>
        </div>
    );
};

export default DashboardCard; 