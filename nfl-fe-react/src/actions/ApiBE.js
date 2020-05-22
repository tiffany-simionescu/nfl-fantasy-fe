import axios from "axios"; 
import React, {useState, useEffect} from "react"; 

//this is a messag

function ApiBE() {
    const [playerList, setPlayerList] = useState([]);  
    const [isLoading, setIsLoading] = useState(false); 

    const thisurl = ('https://tacklemytrade-api.herokuapp.com/api/players')

    useEffect(() => {
            setIsLoading(true); 
            console.log(isLoading); 
                axios.get(thisurl) 
                .then(response => {
                    setPlayerList(response.data);
                    console.log("res.data", response.data);
                //res.data.values[0][4], 
                // [0] first person in array of 24, [4] the full name of each player.   
                    setIsLoading(false)}
                )
            .catch(error => 
                console.log("ApiBE.js: error", error),
                setIsLoading(false));
        }, []);  

        playerList.map(PlayerList => console.log(PlayerList))

    return (
    <div> 
        {/* <h3> We have data! </h3> 
        <div> players data: {playerList} </div>  */}
    </div>
    )
}


export default ApiBE; 