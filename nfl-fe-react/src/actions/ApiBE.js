import axios from "axios"; 
import React, {useState, useEffect} from "react"; 

//this is a messag

function ApiBE() {
    const [playerList, setPlayerList] = useState([]);  
    const [isLoading, setIsLoading] = useState(false); 


    // const cors = 'https://cors-anywhere.herokuapp.com/'; 
    // const playerurl = 'https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players'; //blocked by cors 


    // const queryurl = 'https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players/?Id=1&PlayerFull=4'; 

    // const url = ('https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb.json');


    const thisurl = ('https://tacklemytrade.herokuapp.com/api/players/')


    useEffect(() => {
            setIsLoading(true); 
            console.log(isLoading); 
            

                axios.get(thisurl) 
                .then(response => {
                    // setPlayerList(response.data.values);
                    console.log("res", response);
                //res.data.values[0][4], 

                // [0] first person in array of 24, [4] the full name of each player.   
                    setIsLoading(false)}
                )
            .catch(error => 
                console.log("ApiBE.js: error", error),
                setIsLoading(false));
            
        }, []);  

        // playerList.map(PlayerList => console.log(PlayerList))

    return (
    <div> 
        {/* <h3> We have data! </h3> 
        <div> players data: {playerList} </div>  */}
    </div>
    )
}


export default ApiBE; 