import React from 'react'
import {Layout, Menu} from 'antd'
import {Card} from './Blocks/Card'
import {
  HeaderWrapper,
  ContentWrapper,
  BreadcrumbWrapper,
  FooterWrapper,
  DivContent,
  DivLogo
} from 'styles'

const data = [
  {
    id: 1,
    name: "шарик",
    image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
    price: 20
  },
  {
    id: 2,
    name: "футболка",
    image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
    price: 28
  },
  {
    id: 4,
    name: "шарик 2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
    price: 64
  }
]

export const Home = () => {
  const renderCards = () => {
    return data.map(el => {
      return (
        <Card item={el}/>
      )
    })
  }

  return (
    <Layout>
      <HeaderWrapper>
        <DivLogo>SHOP</DivLogo>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Cart</Menu.Item>
        </Menu>
      </HeaderWrapper>
      <ContentWrapper>
        <BreadcrumbWrapper>
        </BreadcrumbWrapper>
        <DivContent>
            {
              renderCards()
            }
        </DivContent>
      </ContentWrapper>
      <FooterWrapper>©2020 Created by FReego</FooterWrapper>
    </Layout>
  )
}