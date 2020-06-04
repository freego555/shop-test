import React, {useState} from 'react'
import {CardWrapper} from 'styles'
import ReactCardFlip from 'react-card-flip';

const { Meta } = CardWrapper;

export const Card = ({item, ...rest}) => {
  const [isFlipped, changeFlipped] = useState(false)
  const clickCard = () => {
    changeFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" containerStyle={{padding: '24px 0px 0px 0px'}}>
      <CardWrapper
        hoverable
        cover={<img alt="example" src={item.image}/>}
        onClick={clickCard}
      >
        <Meta title={item.name}/>
      </CardWrapper>

      <CardWrapper
        hoverable
        cover={<img alt="example" src={item.image}/>}
        onClick={clickCard}
      >
        <Meta title={item.price}/>
      </CardWrapper>
    </ReactCardFlip>
  )
}