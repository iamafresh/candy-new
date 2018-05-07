import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Wrapper from './components/Wrapper'

class Home extends React.Component {
  render () {
    return (
      <Wrapper>
        <Header />
        <MainContent history={this.props.history} />
      </Wrapper>
    )
  }
}

export default Home
