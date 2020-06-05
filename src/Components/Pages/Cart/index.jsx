import React from 'react'
import {Row} from './Blocks/Row'
import {
  DivContent
} from 'styles'

const data = [
  {
    id: 1,
    name: "шарик",
    image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
    price: 20,
    amount: 2,
    isDeleted: false
  },
  {
    id: 2,
    name: "футболка",
    image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
    price: 28,
    amount: 10,
    isDeleted: false
  },
  {
    id: 4,
    name: "шарик 2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
    price: 64,
    amount: 5,
    isDeleted: false
  }
]

export const Cart = () => {
  const renderRows = () => {
    return data.map(el => {
      return (
        <Row product={el} />
        )
    })
  }

  return (
    <DivContent>
      {/*TODO: Table header*/}
      {renderRows()}
      SUMMARY: ... $
    </DivContent>
  )
}