import React, { useEffect, useState } from "react"

function UserList() {
    //State declaration in function component
    const[data, setData]=useState([])

    useEffect(() => {
        //GetList function called here
       getList();
    },[])// Here we can pass blank arrary so thet is execute at once time.
    console.warn(data);

    function getList(){
        //Get Api start here
        fetch("http://localhost:3002/users").then((result) => {
            result.json().then((resp) => {
                // console.warn("result", resp);
                setData(resp)
            })
        })
    }

// Delete Function declare here
    function deleteUser(id){
        // alert(id);
        fetch(`http://localhost:3002/users/${id}`,{
            method:`DELETE`
        }).then((result)=>{
            //convert the in the json
            result.json().then((resp)=>{
            console.warn(resp);
            getList();
            })  
        }) 
    }
    return (
        <div className="UsersList">
            <div className="container">
            <div className="py-4">
                <h1>Users Page</h1>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index) => (
                            <tr>
                                {/* <th scope="row">{index + 1}</th> */}
                                <td>{index +1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    {/* <button className="btn btn-primary ml-5" exact="true">View</button> */}
                                    <button className="btn btn-outline-primary mr-5px"  exact="true">Edit</button>
                                    <button className="btn btn-danger mr-5px" onClick={()=>deleteUser(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default UserList;