import React from 'react'
import styled from 'styled-components'
const Button = styled.a`
  width: 2.4rem;
  height: .5rem;
  border-radius: .2rem;
  font-size: .24rem;
  font-weight: 500;
  color: rgb(255, 255, 255);
  outline:none;
  border: 0;
  -webkit-box-shadow: 0 7px 0 linear-gradient(left, #FF427D, #297EFF), 0 8px 3px rgba(0, 0, 0, 0.3);
  background: -webkit-linear-gradient(left, #FF427D, #297EFF);
  background: linear-gradient(left, #FF427D, #297EFF);
`
const BaseButton = props => <Button>{props.children}</Button>

export default BaseButton