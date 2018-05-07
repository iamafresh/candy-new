import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  height: .4rem;
  border: 0;
  outline: none;
  background: rgba(255, 255, 255, .9);
  border-radius: .05rem;
  color: rgba(0, 0, 0, .8);
  padding-left: .14rem;
  font-size: .16rem;
`

const Input = () => <StyledInput />

export default Input
