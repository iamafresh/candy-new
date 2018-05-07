import React from 'react'
import styled from 'styled-components'

const StyledP = styled.div`
  font-size: .13rem;
  color: rgb(255, 255, 255);
  line-heihgt:.2rem;
  text-align: left;
  padding: .05rem 0;
`

const P = props => <StyledP>{ props.children } </StyledP>

export default P