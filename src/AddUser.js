    import React, {useState } from "react"

function AddUser(){
    const [id]= useState("");
   const [username, setName]= useState("");
   const [email, setEmail]= useState("");
   const [phone, setPhone]= useState("");
   
  
    function saveUser() {    
        console.warn({username, email, phone});
        let data = {username, email, phone, id};

        fetch(`http://localhost:3002/users/${id}`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            }, 
          body:JSON.stringify(data)
        }).then((result)=>{
            console.warn("result",result);
            result.json().then((resp)=>{
                  console.warn("resp",resp)
            })
        })
    }
    

        return(
            <div>
                <h1>Post API Example</h1>
                <input type="text" value={username} onChange={(e)=>{setName(e.target.value)}} name="username" placeholder="Name"/><br/> <br/>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Email"/><br/> <br/>
                <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} name="phone" placeholder="Phone"/><br/> <br/>
                <button type="submit" onClick={saveUser}>AddUser</button>
            </div>
        );

}
export default AddUser;