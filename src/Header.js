import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import styled from 'styled-components'

function Header() {
    return (
        <StyledHeader>
            <h1>LAMBDA EATS</h1>
            <span>Let's grab a pizza!</span>
        </StyledHeader>    
    )
}

const StyledHeader = styled.header `
h1 {
    font-size: 3em;
    padding: 25px; 
    margin: 0 auto;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    color: red
}
span{
    padding: 25px;
    margin: 0 auto;
    font-style: italic;
    font-size: 2rem;
    text-shadow: 2px 2px 2px blue;
    display: flex;
    justify-content: center;
}

`

export default Header