import axios from "axios"; 
import React, {useState, useEffect} from "react"; 

function ApiBE() {
    const [playerList, setplayerList] = useState();  
    // no[] <- runs on unmount and mount  // no{} 
    const [isLoading, setIsLoading] = useState(false); 

    const playerurl = 'https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players'; //blocked by cors 
    const url = 'https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb.json';  //works by itselfs without cors, stops at 24 arrays, max 429    
    // can't get to work in postman 
    const cors = 'https://cors-anywhere.herokuapp.com/'; // don't help anywhere 

    const testurl = 'https://pokeapi.co/api/v2/pokemon-form/'; // works! 

    // useEffect(() => {
    //    //repeating axios call ??? 
    //     axios.get(url)
    //     .then(res => setplayerList(res.data),
    //         console.log(playerList))
    //     .catch(error => console.log("ApiBE.js: error", error));
    // }, [playerList]);   //[Object.values(playerList)]

    useEffect(() => {
        setIsLoading(true); 

        axios.get(testurl)   
        .then(res => 
            setplayerList(res.data),
            console.log(playerList),  // undefined 
            setIsLoading(false))
        .catch(error => 
            console.log("ApiBE.js: error", error),
            setIsLoading(false));
    }, [playerList] );  // should be empty so it doesn't repeat, but won't work otherwise added , 1 to make it only loop once, but failed also with url. 

    return [ isLoading, playerList ], 
    <div> <h1> hi </h1></div>; 

};



// if (setplayerList === playerList) {
//     console.log(playerList, setplayerList)
//     return ; 
// }


//helper codes 
// function App() {
//     // Initialize state to hold the image URL
//     const [dogPic, setDogPic] = useState("");
//     useEffect(() => {
//       // This axios GET request will return a single image
//       axios
//         .get("https://dog.ceo/api/breeds/image/random")
//         // Which we then set to state
//         .then(res => setDogPic(res.data.message))
//         // Always include error handling
//         .catch(err => console.log(err));
//     }, []);
  
//     return (
//       <div className="App">
//         <h1>We Love Puppers</h1>
//         <img src={dogPic} alt="a random dog" />
//       </div>
//     );
//   }



// class Fetching extends React.Component {
//     state = {
//         User: { }     // or [] or "  "  
//     };

//     componentDidMount() {
//         fetch("https://api.github.com/users/lauralyeinc")
//         .then(response => response.json())
//         .then(response =>{
//             console.log("Fetching.js: componentDidMount fetch response", response);
//             this.setState({
//                 User: response  
//             });
//         })
//         .catch(error => {
//             console.log("Fetching.js: componentDidMount fetch Error", error);
//         }); 
//     }

//     render(){
//         return (
//             <div className="fetching-info">
//                 {/* <p> testing </p> */}
//             <EachUser key={this.state.User.id} User={this.state.User} />
//             </div>
//         )
//     }
// }



export default ApiBE; 