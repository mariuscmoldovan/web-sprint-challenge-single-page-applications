import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import ConfirmationPage from './Confirmation'
import styled from 'styled-components'

const App = () => {
  return (
    <StyledDiv>
      <Header />
      <Router>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='./Form'>Order</Link>
          <Link to='./Pizza'>Confirmation</Link>
        </div>  
        <Switch>
          <Route path='/Form'>
            <Form />
          </Route>
          <Route path='/Confirmation'>
            <ConfirmationPage />
          </Route>  
        </Switch>
      </Router>
        <img src="https://pngimage.net/wp-content/uploads/2018/06/pizza-grande-png-1.png" />
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestias rerum optio! Velit, quibusdam culpa pariatur quasi ratione deserunt tempora molestias animi officiis sunt minus quia recusandae provident eum distinctio?</p>
        <br />
      <Footer />
    </StyledDiv>
  );
};


const StyledDiv = styled.div `
.links > a {
    color: blue;
    padding-right: 25px;
    display: flex;
    flow-direction: column;
    justify-content: flex-start
    color: red;
    font-size: 1.5em;
   &:hover {
      cursor: pointer;
      color: red;
  }
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    box-shadow: 5px 5px 5px whitesmoke;
    text-align: left;  
}
p {
  margin: 0 auto;
  width: 55%;
  text-align: center;
  text-justify: center;
  
}
`

const StyledForm = styled.form `
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* opacity: 75%; */
  border-radius: 15px;
  box-shadow: 5px 5px 5px whitesmoke;
  text-align: center;
}
.info > input, .specialIns{
  border-radius: 15px;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  width: 300px;
  background-color: white;
  color: black;
  text-shadow: 2px 2px greenyellow;
  text-align: center;
  &:hover{
      background-color: slategrey;
      color: greenyellow;
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
  padding: 20px;
  width: 150px;
  background-color:blue;
  color: black;
  text-align:center;
  &:hover{
      background-color: slategrey;
      color: greenyellow;
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
export default App;