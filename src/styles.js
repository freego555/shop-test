import styled from 'styled-components'
import {Layout, Breadcrumb, Card} from 'antd'

const { Header, Footer, Content } = Layout

export const DivContent = styled.div`
  padding: 0px 24px 24px 24px;
  min-height: 720px;
  background: #fff;
`

export const DivLogo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
  
  text-align: center;
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.65);
`

export const LayoutWrapper = styled(Layout)`
`

export const HeaderWrapper = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
`
export const ContentWrapper = styled(Content)`
  padding: 0px 50px;
  margin-top: 64px;
  background: '#fff';
`
export const BreadcrumbWrapper = styled(Breadcrumb)`
  margin: 16px 0px;
`

export const FooterWrapper = styled(Footer)`
  text-align: center;
`

export const CardWrapper = styled(Card)`
  width: 240px;
`