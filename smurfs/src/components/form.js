import Axios from 'axios';
import React, {useReducer, useState} from 'react'
import {postSmerf} from '../reducers/action'
import {connect} from 'react-redux'
import initialState from '../reducers/reducer'

const initial = {
    name:'',
    age:'',
    height:'',
}

const Form = (props) => {
    const [data, setData] = useState(initial);

    const handleC = event =>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }
    const Submit = event => {
        event.preventDefault()
        const newSmerf ={
            name:data.name,
            age:data.age,
            height:data.height,
        }
        if(!newSmerf.name||!newSmerf.age||!newSmerf.height)
        return
        something(newSmerf)
        setData(initial)
    }
    const something = (newSmerf) =>{
       props.postSmerf(newSmerf)
    }
    return(
        <form onSubmit = {Submit}>
            <div>
                <input
                name = 'name'
                type = 'text'
                placeholder = 'Enter Name'
                onChange = {handleC}
                value = {data.name}
                />
                <input
                name = 'age'
                type = 'text'
                placeholder = 'Enter Age'
                onChange = {handleC}
                value = {data.age}
                />
                <input
                name = 'height'
                type = 'text'
                placeholder = 'Enter Height'
                onChange = {handleC}
                value = {data.height}
                />
                <button type = 'Submit'>Submit</button>
            </div>
        </form>
    )
}
export default connect(null,{postSmerf})(Form)