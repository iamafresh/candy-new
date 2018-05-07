import React from 'react'
import styled from 'styled-components'
import Invate from './Invate'

const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: .2rem;
`

const InvateBox = props => {
  return (
    <FlexBox>
      <Invate num='10' content='邀请人数' />
      <Invate num='25' content='获得TIC' />
    </FlexBox>
  )
}

export default InvateBox