import React,{useEffect,useState} from "react";
function Contact()
{ 
    //State declaration in function component
    const[name,setName]=useState("Shivam");
    const[age,setAge]=useState(27);

    useEffect(()=>{
        console.warn("hello from hook");
    })
    let data = "Contact us Component"
    return(
        <div>
            {/* Here we use JSX in {} */}
            <h1>{data}</h1>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <button onClick={()=>setName("Shivam gupta")}>Update Name</button>
            <button onClick={()=>setAge(30)}>Update Age</button>
        </div>
    );
};

export default Contact;