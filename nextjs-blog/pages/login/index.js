import React, { useState, useEffect } from "react";

const Index = (props) => {
    const [id, setId]=useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState("");

const updateInfo=()=>{
    setData({id,password})
}
    const updateId = (e) => {
        setId(e.target.value)
    }
    const updatePassword = (e) => {
        setPassword(e.target.value)
    }
    return <div>
        <p>Id</p><input id="username-field" onChange={updateId}/>
        <p>password</p><input id="password-field" onChange={updatePassword} />
        <br/>
        <button id="submit" onClick={updateInfo}>submit</button>
        {data !=""? <p id="updated-value">id entered is {data.id} and password entered is {data.password}</p>:null}
    </div>
}
export default Index;