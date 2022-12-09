import React, { useState } from "react";



const IssignedIn=()=>{
    const [issignedin, setissignedin] = useState("false");
    const [username, setusername]=useState("");
    return [issignedin, setissignedin,username,setusername];
}
export function Changestatus(e){
    let issignedin=IssignedIn();
    if(issignedin[0]){
        issignedin[1]("false");
    }else{
        issignedin[1]("true");
    }
}
export default IssignedIn;