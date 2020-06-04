import React from 'react'
import {Home} from './Pages/Home'
import {Cart} from './Pages/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {Layout, Menu} from 'antd'
import {
  HeaderWrapper,
  ContentWrapper,
  BreadcrumbWrapper,
  FooterWrapper,
  DivLogo
} from 'styles'

const App = () => {
  return (
    <Router>
      <Layout>
        <HeaderWrapper>
          <DivLogo>SHOP</DivLogo>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item key='2'><Link to='/cart'>Cart</Link></Menu.Item>
          </Menu>
        </HeaderWrapper>
        <ContentWrapper>
          <BreadcrumbWrapper>
          </BreadcrumbWrapper>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
          </Switch>
        </ContentWrapper>
        <FooterWrapper>©2020 Created by FReego</FooterWrapper>
      </Layout>
    </Router>
  )
}

export default App
