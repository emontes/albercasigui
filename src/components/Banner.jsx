import React from 'react'
import styled from 'styled-components'

const Banner = ({title, info, children, color="var(--mainWhite)", bgcolor="none"}) => {
    return (
        <BannerWrapper color={color} bgcolor={bgcolor}>
            <h1>{title}</h1>
            <p>{info}</p>
            {children}
        </BannerWrapper>
    )
}

export default Banner

const BannerWrapper = styled.div`

  text-align: center;
  
  color: ${props => props.color};
  
  
  
  
 h1 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  margin-top: 1rem;
  padding: 0 1rem;
  letter-spacing: 6px;
  background-color: ${props => props.bgcolor};
  text-shadow: 0 0 2px var(--mainBlack);
  
}
 p {
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: ${props => props.bgcolor};
  text-shadow: 0 0 2px var(--mainBlack);
}
@media screen and (min-width: 768px) {
  
    margin-bottom: 3rem;
  
   h1 {
    font-size: 3.2rem;
  }
   p {
    width: 70%;
  }
}

`
