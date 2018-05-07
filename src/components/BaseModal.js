import React from 'react'
import styled from 'styled-components'
import { Modal, Button } from 'antd'
import activity from '../asset/images/h5/activity.png'

const H1 = styled.h1`
  font-size: .17rem;
  font-weight: 600px;
  color: rgba(51, 51, 51, 1);
`
const P = styled.p`
  font-size: .13rem;
  color: rgba(141, 141, 141, 1);
`

class BaseModal extends React.Component {
  constructor (props) {
    super (props)
    this.state = { visible: true }
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    console.log(this.props.isVisible)
    this.setState({
      visible: this.props.isVisible
    })
  }
  
  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <div>
        <Modal
          visible={this.visible}
          onOk={this.handleOk}
        >
          <img src={activity} />
          <H1>活动已经结束</H1>
          <P>请关注官网或电报群，了解更多资讯</P>
          <Button>知道了</Button>
        </Modal>
      </div>
    )
  }
}

export default BaseModal