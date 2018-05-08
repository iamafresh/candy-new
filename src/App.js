import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './App.css'
import mobileBg from './asset/images/h5/mobileBg.png'
import pcBg from './asset/images/web/pcBg.png'
import Home from './Home'
import Main from './Main'

import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import zhCN from './locales/zh-CN.js'
import enUS from './locales/en-US.js'
addLocaleData([...en, ...zh])

const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
const bgUrl = isMobile ? mobileBg : pcBg

const Wrapper = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 1);
  background-position: bottom center;
  background-image: url(${bgUrl});
  background-repeat: no-repeat;
  min-height: 100vh;
`

class App extends Component {
  constructor () {
    super()
    this.state = {
      locale: 'en',
      messages: enUS
    }
    this.handleLanguage = this.handleLanguage.bind(this)
  }

  getChildContext () {
    return {
      locale: 'en',
      toggle: this.handleLanguage
    }
  }

  handleLanguage () {
    this.setState({
      locale: 'zh',
      messages: zhCN
    })
  }

  render () {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        <Router>
          <Wrapper className='App' locale={this.state.locale}>
            <Route exact path='/' component={Home} locale={this.state.locale} />
            <Route path='/main' component={Main} />
          </Wrapper>
        </Router>
      </IntlProvider>
    )
  }
}

App.childContextTypes = {
  locale: PropTypes.string,
  toggle: PropTypes.func
}

export default App
