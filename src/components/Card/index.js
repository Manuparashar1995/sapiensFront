import React from 'react'
import './index.css'

export default function index(props) {
    return (
        <div>
            <div className="card">
                <div className="container">
                    <h4><b>{props.data.firstName}</b></h4>
                    <div>Last Name:{props.data.lastName}</div>
                    <div>Phone:{props.data.phone}</div>
                    <div>Email:{props.data.email}</div>
                    <div>Address:{props.data.address}</div>
                </div>
            </div>
        </div>
    )
}
