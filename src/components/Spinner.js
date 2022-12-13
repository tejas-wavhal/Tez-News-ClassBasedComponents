import React, { Component } from 'react'
import Loading from './Loading.gif'
import "./Spinner.css";

export class Spinner extends Component {
    render() {
        return (
            <div className='spinnerEdit'>
                <img src={Loading} alt="Loading" style={{height:'50px'}}/>
            </div>
        )
    }
}

export default Spinner