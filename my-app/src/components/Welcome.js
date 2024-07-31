import { Component } from "react";

// class Welcome extends Component {
//     render(){
//     return(
//         <>
//         <h2>Welcome to satara</h2>
//         </>
//     )
//     }
// }



//props concept
const Welcome= (props)=>{
    return(
        <>
        <h1>Welcome {props.name}</h1>
       
        </>
    )
}
export default Welcome;