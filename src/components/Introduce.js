import React from 'react'
import styled from 'styled-components'
import P from './P'

const Wrapper = styled.div`
  margin: .3rem 0;
`
const Introduce = props => {
  return (
    <Wrapper>
      <P>{props.content}</P>
      <P>{props.explain}</P>
    </Wrapper>
  )
}

export default Introduce
