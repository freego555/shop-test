import React from 'react'
import {
  SubRowWrapper,
  ColWrapper,
  ButtonWrapper,
  SpanAmount
} from 'styles'

export const CountSumRow = (props) => {
  const {product} = props

  return (
    <SubRowWrapper>
      <ColWrapper span={10}>
        <ButtonWrapper type="primary" shape="circle" size='large'>-</ButtonWrapper>
        <SpanAmount>{product.amount}</SpanAmount>
        <ButtonWrapper type="primary" shape="circle" size='large'>+</ButtonWrapper>
      </ColWrapper>
      <ColWrapper span={7}>
        {product.price}
      </ColWrapper>
      <ColWrapper span={7}>
        {product.amount * product.price}
      </ColWrapper>
    </SubRowWrapper>
  )
}