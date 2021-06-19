import React,{useState} from 'react'
import './index.css' 
import UserServices from '../../service/index'

export default function AddUser(props) {
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        password:"",
        address:""
    })
    const [error, setError] = useState(null)

    let submitForm = (e) => {
        e.preventDefault()
        UserServices.saveUsers(formData).then(data => {setError(false)
                                                    props.close(true)}).catch(err =>
            setError(err)
        )
    }

    let handleChange = (e) => {
        let tar = e.target.id
        let value = e.target.value
        console.log(tar,value)
        setFormData({...formData,[tar]:value});
        console.log(formData)
    }

    return (
        <div>
            <div id="myModal" className="myModal">
                <div className="modalContent">
                    <span className="close" onClick={()=>props.close(false)}>&times;</span>
                    <form id = 'useradd'>
                        <div>
                            <label htmlFor='firstName' >First Name:</label>
                        </div>
                        <div>
                            <input id='firstName' value = {formData.firstName} type='text' onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='lastName'>Last Name:</label>
                        </div>
                        <div>
                            <input id = 'lastName' value = {formData.lastName} type='text' onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='phone'>Phone:</label>
                        </div>
                        <div>
                            <input id = 'phone' value = {formData.phone} type='tel' onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='email'>Email:</label>
                        </div>
                        <div>
                            <input id = 'email' value = {formData.email} type='email' onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='password'>Password:</label>
                        </div>
                        <div>
                            <input id='password' value = {formData.password} type='password' onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='address'>Address:</label>
                        </div>
                        <div>
                            <input id='address' value = {formData.address} onChange={handleChange}/>
                        </div>
                        <div>
                            <button type='submit' onClick={submitForm}>Save</button>
                        </div>
                    </form>
                    {error?<div>Something went wrong</div>:null}
                </div>
            </div>
        </div>
    )
}
