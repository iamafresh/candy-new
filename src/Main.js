import React from 'react'
import styled from 'styled-components'
import Wrapper from './components/Wrapper.js'
import Header from './components/Header.js'
import P from './components/P'
import LogoBox from './components/LogoBox'
import Introduce from './components/Introduce'

import Footer from './components/Footer'
import Telegram from './components/Telegram'
import InvateBox from './components/InvateBox'

const MainContent = styled.div`
  width: 90%;
  margin: 0 auto;
`
const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin: .1rem 0;
`
const Input = styled.input`
  width: 80%;
  height: .4rem;
  border: 0;
  outline: none;
  background: rgba(255, 255, 255, .9);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  color: rgba(0, 0, 0, .8);
  padding-left: .14rem;
  font-size: .16rem;
`
const Span = styled.span`
  display: inline-block;
  width: 20%;
  height: .4rem;
  line-height: .4rem;
  vertical-align: middle;
  color: #11031C;
  text-align: center;
  background: #999;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

class Main extends React.Component {
  render () {

    const activityName = '泰链科'
    const activityContent = 'TiC是泰链科技发行的数字货币。泰链科技是一家全球性的区块链技术落地服务商。公司从技术产品解决发币、发糖果、钱包、交易所、上链等区块链项目需求。泰链打造的全球性区块链服务，TiC将打通企业之间的业务交易与合作。'

    return (
      <Wrapper>
        <Header />
        <LogoBox />
        <MainContent>
          <Introduce content={activityContent} />
          <Telegram telegramSrc='https://t.me/tichaintt' count='20' icon='TiC' />
          <InputBox>
            <Input />
            <Span>复制</Span>
          </InputBox>
          <P>
            <span>3.分享链接给好友获取更多TIC。每邀请一个好友入群，即可获得10个TIC。</span>
          </P>
          <InputBox>
            <Input />
            <Span>复制</Span>
          </InputBox>
          <InvateBox />
          <Footer activityName={activityName} />
        </MainContent>
      </Wrapper>
    )
  }
}

export default Main