import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import App from './App'
import styled from 'styled-components'
import { findAllByDisplayValue } from '@testing-library/react'
import schema from "../src/schemas/formSchema"
import * as yup from "yup"

const initialToppings = {
    mushroom: false,
    onion: false,
    pepperoni: false,
    sausage: false,
    greenPepper: false,
    canadianHam: false,
    grilledChicken: false,
    arugula: false,
    blackOlives: false,
    bacon: false
}

const initialFormErrors = {
    name: "",
    size: "",
    gluttenFree: ""
  }
  
function Form() {
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [topping, setTopping] = useState(initialToppings)
    const [gluttenFree, setGluttenFree] = useState(false)
    const [specialInstructions, setSpecialInstructions] = useState('')
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [newOrder, setNewOrder] = useState('')
    const [formValues, setFormValues] = useState({})
  
    const onChange = evt => {
        console.log(true)
    }

    const onChangeInput = evt => {
      const { name, value } = evt.target
      validate(evt.target.name, evt.target.value)
      setFormValues({...formValues, [name]: value})
      console.log(name, value)
    }

    const onChangeCheckbox = evt => {
        const { name, checked } = evt.target
        console.log(name, checked)
        setTopping({...topping, [name]: checked})
        setNewOrder({...newOrder, [name]: checked})
    }

    const validate = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then((valid)=>{
            setFormErrors({
              ...formErrors, [name]: "",
            })
          })
          .catch((err)=>{
            setFormErrors({
              ...formErrors, [name]: err.errors[0]
            })
          })
      }

    const submit = evt => {
      evt.preventDefault()
      console.log(gluttenFree)

      const orderDetails = {
        name: formValues.name,
        size: formValues.size,
        topping: formValues.topping,
        gluttenFree: formValues.gluttenFree,
     
      }

      setNewOrder(orderDetails)
    }
  
    useEffect(() => {
        
    }, [])
    
    return (
    <StyledForm>
        <div className="form">
            <h1>Build Your Own Pizza</h1>
            <hr />
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=500&q=60" alt="pizza" />
        </div>
        <br />
    <div className='info'>
        <input 
            type='text' 
            name='name' 
            onChange={onChangeInput}
            value={formValues.name}
            placeholder='Name' 
        />
        <input
            type='email' 
            name='email' 
            onChange={onChangeInput}
            value={formValues.email}
            placeholder='email' 
        />
    </div>
        <h4>Choose Your Pizza Size</h4>
        <select className='size'
            type='text' 
            name='size' 
            onChange={onChange}
           >
              <option value=''>:::Select:::</option>
              <option value='10 inch'>10 inch</option>
              <option value='12  inch'>12 inch</option>
              <option value='14 inch'>14 inch</option>
              <option value='16 inch'>16 inch</option>
              <option value='20 inch'>20 inch</option>  
           </select>
        <div className='toppings'>
            <h4>Choose Your Toppings</h4>
            <span>Choose up to 5</span>
                 <br />
                 <br />
            <label>Mushroom</label>
            <input className='checkboxTop'
                type='checkbox'
                name='Mushroom'
                onChange={onChangeCheckbox}
            />
            <label>Pepperoni</label>
            <input className='checkboxTop'
                type='checkbox'
                name='pepperoni'
                value='pepperoni'
                onChange={onChangeCheckbox}
            />            
            <label>Sausage</label>
            <input className='checkboxTop'
                type='checkbox'
                name='Sausage'                
                onChange={onChangeCheckbox}
            />
            <label>Ham</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Ham'             
                onChange={onChangeCheckbox}
            />
            <label>Bacon</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Bacon'                
                onChange={onChangeCheckbox}
            />
            <label>Grilled Chicken</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Grilled Chicken'                
                onChange={onChangeCheckbox}
            />
            <label>Black Olives</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Black Olives'               
                onChange={onChangeCheckbox}
            /><label>Onion</label>
            <input className='checkboxTop'
                type='checkbox'
                name='onion'               
                value='onion'
                onChange={onChangeCheckbox}
            />
            <label>Pepper</label>
            <input className='checkboxTop'
                type='checkbox'
                name='Green Pepper'             
                onChange={onChangeCheckbox}
            />
            <label>Arugula</label>
            <input className='checkboxBottom'
                type='checkbox'
                name='Arugula'                
                onChange={onChangeCheckbox}
            />
            <br />
        </div>
        <div className='gluttenFree'>
        <h4>Glutten Free Option</h4>
            <label>Yes</label>
                <input
                    type='radio'
                    name='option'
                    checked={gluttenFree}
                    onChange={() => setGluttenFree(true)}
                />    
            <label>No</label>
                <input
                    type='radio'
                    name='option'
                    checked={!gluttenFree}
                    onChange={() => setGluttenFree(false)}
                />  
                <br /> 
            
        </div>
        <br />
        <button onClick={submit}>Submit Your Order</button>
    </StyledForm>    
    )
}

const StyledForm = styled.form `
img {  
    display: block;
    margin-left: 30%;
    margin-right:20%;
    border-radius: 15px;
    box-shadow: 5px 5px 5px whitesmoke;
    text-align: left
    ;
}

.info > input {
    border-radius: 15px;
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
    width: 300px;
    background-color:#e1b12c;
    color: black;
    text-align: center;
    &:hover{
        background-color: slategrey;
        color:red;
        cursor: pointer;
    }
    &:focus {
        border: gray;
        outline: none;
        }
    &:active {
        border: gray;
        outline: none;
    }
}
.size, button {
    border-radius: 15px;
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
    width: 150px;
    background-color:#e1b12c;
    color: black;
    text-align:center;
    &:hover{
        background-color: slategrey;
        color: #44bd32;
        cursor: pointer;
    }
    &:focus {
        border: gray;
        outline: none;
        }
    &:active {
        border: gray;
        outline: none;
    }
}

span {
    font-style: italic;
    text-shadow: 2px 2px 2px darkgray;
}
`
export default Form