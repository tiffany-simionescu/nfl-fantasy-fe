import axios from "axios"; 
import React, {useState, useEffect} from "react"; 

//this is a messag

function ApiBE() {
    const [playerList, setplayerList] = useState([]);  
    const [isLoading, setIsLoading] = useState(false); 

    const cors = 'https://cors-anywhere.herokuapp.com/'; // don't help anywhere 
    const playerurl = 'https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players'; //blocked by cors 


    const url = ('https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb.json');  //the whole data table 

    useEffect(() => {
            setIsLoading(true); 
            console.log(isLoading); 
            
                axios.get(cors + playerurl)    
                .then(res => 
                console.log("res.data", res.data),   
                setIsLoading(false))
            .catch(error => 
                console.log("ApiBE.js: error", error),
                setIsLoading(false));
            
            
        }, []);  

    return (
    <div> 
        <h3> We have data! </h3> 
        <div> players </div> 
    </div>
    )
}


export default ApiBE; 