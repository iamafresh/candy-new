import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  max-width: 100%;
  width: .75rem;
  height: .75rem;
`
const Title = styled.h1`
  font-size: .2rem;
  color: rgb(255, 255, 255);
  padding: .1rem
`

const LogoBox = props => {
  return (
    <div>
      <Img src={props.src} />
      <Title>{props.title}</Title>
    </div>
  )
}

export default LogoBox
