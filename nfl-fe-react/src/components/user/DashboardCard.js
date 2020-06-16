import React from "react";

const DashboardCard = (props) => {
    return (
    <div>
        <h3> Fan's dashboard</h3>
                    {localStorage.getItem('fan-token')  
                    ?
                    (<p>Hello {props.users.first_name}!</p> 
                    ) : (
                    <h4>Loading...</h4>
                    )
                    } 
        </div>
    );
};

export default DashboardCard; 