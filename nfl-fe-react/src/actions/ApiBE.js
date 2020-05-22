import axios from "axios"; 
import React, {useState, useEffect} from "react"; 


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
                    setIsLoading(false)}
                )
            .catch(error => 
                console.log("ApiBE.js: error", error),
                setIsLoading(false));
        }, []);  

        playerList.map(PlayerList => console.log(PlayerList))

    return (
    <div>
    </div>
    )
}


export default ApiBE; 