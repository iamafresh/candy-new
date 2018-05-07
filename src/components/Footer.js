import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .33rem 0;
  font-size: .12rem;
`
const Footer = props => <Wrapper>了解更多信息{ props.activityName }</Wrapper>

export default Footer