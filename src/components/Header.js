import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon } from 'antd'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: .2rem;
  align-items: center;
  width: 100%;
  height: 1rem;
  
`
const DropdownBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: .8rem;
  height: .3rem;
  border-radius: .04rem;
  background: rgba(0, 0, 0, .8);
  border:1px solid #FFF;
`
const Span = styled.span`
  color: rgb(255, 255, 255);
  font-size: .14rem;
`
const MenuItem = styled(Menu.Item)`
  display: flex;
  width: .8rem;
  height: .3rem;
  align-items: center;
  justify-content: center;
  border-radius: .05rem;
  padding: 0;
`
const Button = styled.button`
  display: inline-block;
  width: 100%;
  height: 100%;
  outline: none;
  border: 0;
  background: rgba(255, 255, 255, 1);
  &:hover,
  &:active {
    background: rgba(0, 0, 0, .1);
  }
`

const menu = (
  <Menu>
    <MenuItem>
      <Button>中文</Button>
    </MenuItem>
    <MenuItem>
      <Button>英文</Button>
    </MenuItem>
  </Menu>
)
class Header extends React.Component {
  componentDidMount () {
    console.log(this.context.locale)
  }

  render () {
    return (
      <Wrapper>
        <Dropdown
          overlay={menu}
          trigger={['hover', 'click']}
        >
          <DropdownBox>
            <Span href='#' onClick={this.context.toggle}>中文<Icon type='down' /></Span>
          </DropdownBox>
        </Dropdown>
      </Wrapper>
    )
  }
}

Header.contextTypes = {
  locale: PropTypes.string,
  toggle: PropTypes.func
}

export default Header