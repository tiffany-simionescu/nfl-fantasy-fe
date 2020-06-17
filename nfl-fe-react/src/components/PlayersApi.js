import React, {Component, useState, useEffect} from 'react'
import axios from 'axios';

// export default class Players extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Players: []
//         };
//     }
//     getUsersData() {
//         axios
//             .get(`https://tacklemytrade-api.herokuapp.com/api/players`, {})
//             .then(res => {
//                 const data = res.data
//                 console.log(data)

//             })
//             .catch((error) => {
//                 console.log(error)
//             })

//     }
//     componentDidMount(){
//         this.getUsersData()
//     }
//     render() {

//         return (
//             <div></div>
//         )
//     }
// }

function Players() {
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


export default Players; 