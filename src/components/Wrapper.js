import React from 'react'
import styled from 'styled-components'

const WrapperBox = styled.div`
  max-width: 980px;
  margin: 0 auto;
  color: rgba(255, 255, 255, .8);
`

const Wrapper = (props) => <WrapperBox>{props.children}</WrapperBox>

export default Wrapper
