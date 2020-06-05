import React from 'react'
import {
  RowWrapper,
  ColWrapper,
  ImgCart
} from 'styles'
import {CountSumRow} from "./CountSumRow"

export const Row = (props) => {
  const {product} = props

  return (
    <RowWrapper>
      <ColWrapper span={5}>
        <ImgCart src={product.image} alt="Image of product"/>
      </ColWrapper>
      <ColWrapper span={8}>
        {product.name}
      </ColWrapper>
      <ColWrapper span={10}>
        <CountSumRow product={product} />
      </ColWrapper>
      <ColWrapper span={1}>
        DEL
      </ColWrapper>
    </RowWrapper>
  )
}