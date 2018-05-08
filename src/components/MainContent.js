import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Message, Modal, Button } from 'antd'
import {
  FormattedMessage,
  injectIntl,
  defineMessages
} from 'react-intl'
import activity from '../asset/images/h5/activity.png'
import '../asset/css/buttons.css'
import P from './P'
import LogoBox from './LogoBox'
import Introduce from './Introduce'
import { isChecksumAddress } from '../asset/js/utils.js'
import Footer from '../components/Footer'

import pcLogo from '../asset/images/web/pcLogo.png'
import mobileLogo from '../asset/images/h5/mobileLogo.png'

const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
const logoSrc = isMobile ? mobileLogo : pcLogo


const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`
const Input = styled.input`
  width: 100%;
  height: .4rem;
  border: 0;
  outline: none;
  background: rgba(255, 255, 255, .9);
  border-radius: .05rem;
  color: #11031C;
  padding-left: .14rem;
  font-size: .15rem;
`
const BaseButton = Input.extend`
  background: #297EFF;
  margin-top: .2rem;
  font-size: .17rem;
  color: rgb(255, 255, 255);
`

const H1 = styled.h1`
  font-size: .17rem;
  font-weight: 600px;
  color: rgba(51, 51, 51, 1);
`
const ModalP = styled.p`
  color: rgba(141, 141, 141, 1);
  font-size: .13rem;
`
const Img = styled.img`
  max-width: 100%;
`
const modalBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
const inputStyle = {
  width: '100%',
  height: '.4rem',
  border: 0,
  outline: 'none',
  background: 'rgba(255, 255, 255, .9)',
  borderRadius: '.05rem',
  color: '#11031C',
  paddingLeft: '.14rem',
  fontSize: '.12rem',
}

const messages = defineMessages({
  get: {
    id: 'get',
    defaultMessage: '领取'
  }
})

class MainContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      showPhone: false,
      showEthAddress: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount () {
    this.setState({
      showPhone: true
    })
  }

  handleOk = () => {
    this.setState({
      visible: false
    })
  }

  fetchData () {
    const url = 'http://121.43.171.12:30000/api/candy/register'
    const data = {
      'phone': '',
      'name': '',
      'personal_id': '',
      'ethAddress': '0x30998cb4686c1e1d176a52129b162fc478ea4be2',
      'country': '',
      'code': 0
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.post(url, data, config)
      .then(res => {
      res.data.success ?
        this.props.history.push('/main')
      :
        this.setState({
          visible: true
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  valite () {
    const { value } = this.input
    if(!value && !value.length) {
      Message.warning('以太坊地址错误')
      return false
    }
    if (value.length !== 42) {
      Message.warning('以太坊地址错误！')
      return false
    }
    if (value.length === 42 && !isChecksumAddress(value)) {
      Message.warning('以太坊地址错误！')
      return false
    }

    return true
  }

  handleSubmit () {
    if(this.valite()) {
      this.fetchData()
    }

    // this.props.history.push('/main')
  }

  render () {
    const activityName = '泰链科技'
    const introduceContent = 'TiC是泰链科技发行的数字货币。泰链科技是一家全球性的区块链技术落地服务商。公司从技术产品解决发币、发糖果、钱包、交易所、上链等区块链项目需求。泰链打造的全球性区块链服务，TiC将打通企业之间的业务交易与合作。'
    const explainContent = '输入以太坊地址，领取20个TiC。加入电报群输入验证码即可领取成功！每邀请1位好友加入电报群，还可获得10个TiC。'
    const { formatMessage } = this.props.intl
    
    return (
      <Wrapper>
        <LogoBox src={logoSrc} title='Tichain' />
        { /*<BaseButton className='button button-3d button-action button-pill'>加入电报群</BaseButton> */}
        <Introduce content={introduceContent} explain={explainContent} />
        {this.state.showEthAddress ?
          <input style={inputStyle} type='text' ref={input => this.input = input} placeholder='请输入以太坊地址' />
          : null
        }
        <BaseButton type='button' value={formatMessage(messages.get)} onClick={this.handleSubmit}></BaseButton>
        <Footer activityName={activityName}></Footer>
        
        <Modal
          bodyStyle={modalBodyStyle}
          closable={false}
          visible={this.state.visible}
          footer={null}
        >
          <Img src={activity} />
          <H1>
            <FormattedMessage
              id='activity'
              defaultMessage='活动已经结束'
            />
          </H1>
          <ModalP>请关注官网或电报群，了解更多资讯</ModalP>
          <Button onClick={this.handleOk}>知道了</Button>
        </Modal>
      </Wrapper>
    )
  }
}

export default injectIntl(MainContent)
