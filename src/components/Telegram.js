import React from 'react'
import P from './P'

const Telegram = props => {
  return (
    <React.Fragment>
      <P>
        <span>1.加入telegram电报群</span>
        <a href={props.telegramSrc}>&nbsp;&nbsp;{props.telegramSrc}</a>
      </P>
      <P>
        <span>2.在频道中发送以下验证码即可获得{props.count}{props.icon}</span>
      </P>
    </React.Fragment>
  )
}

export default Telegram