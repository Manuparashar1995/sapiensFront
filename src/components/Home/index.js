import React,{useEffect, useState} from 'react'
import UserServices from '../../service/index'
import AddUser from '../AddUser'
import Card from '../Card'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    const[userData, setUserData] = useState([])
    const[showForm, setShowForm] = useState(false)
    const[reload,setReload] = useState(false)

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        if(reload) getData();
        setReload(false);
    },[reload])

    async function getData(){
        let userData = await UserServices.getUsers()
        setUserData(userData)
    }

    return (
        <div>
            <div className='row'>
                {userData.map((data,index) => <div className = 'col-md-3'><Card data={data}/></div>)}
            </div>
            <button onClick = {()=>{console.log(showForm);setShowForm(true)}}>Add User</button>
            {showForm?<AddUser close = {(status)=>{setShowForm(false)
            setReload(status)}
            }/>:null}
        </div>
    )
}
