import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-block;
  padding-top: .7rem;
`
const BackgroundBox = styled.div`
  position: relative;
  width: 1.4rem;
  height: .4rem;
  background: rgba(16, 49, 112, 1);
  border-radius: .06rem; 
`
const BottomBox = styled.div`
  position: absolute;
  left: 0;
  top: .05rem;
  width: 1.4rem;
  height: .4rem;
  line-height: .4rem;
  text-align: center;
  vertical-align: middle;
  border-radius: .03rem; 
  background:rgba(56,127,245,1);
  z-index: 1000;
  font-size: .12rem;
  color: rgb(255, 255, 255);
`
const WrapperTopBox = styled.div`
  position: absolute;
  left: .05rem;
  top: -.4rem;
  width: 1.3rem;
  height: .6rem;
  padding-top: .05rem;
  padding-left: .05rem;
  background: rgba(229, 229, 229, 1);
  border-radius: .03rem;
  z-index: 100;
`
const ShowBox = styled.div`
  width: 1.2rem;
  height: .6rem;
  line-height: .4rem;
  text-align: center;
  vertical-align: middle;
  background: rgba(229, 229, 229, 1);
  border: 1px solid rgba(48, 124, 250, .5);
  border-radius: .03rem;
  color: rgba(54,122,247,1);
  font-size: .24rem;

`
const Invate = props => {
  return (
    <Wrapper>
      <BackgroundBox>
        <WrapperTopBox>
          <ShowBox>{props.num}</ShowBox>
        </WrapperTopBox>
        <BottomBox>{props.content}</BottomBox>
      </BackgroundBox>
    </Wrapper>
  )
}

export default Invate
