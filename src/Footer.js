
import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <StyledFooter>
            <hr />
            <p>LAMBDA SCHOOL</p>
            <p> ENJOY!!!</p>
        </StyledFooter>    
    )
}

const StyledFooter = styled.footer `
p {
    text-align: center;
    text-shadow: 2px 2px 5px whitesmoke;
    padding: 15px;
    margin: 0 auto;
    color: #1B1464
}
`



export default Footer