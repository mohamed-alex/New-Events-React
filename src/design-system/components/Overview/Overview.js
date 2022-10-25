import React from 'react'
import {OverviewWapper, Icon, Title, Descreption} from './Style.jsx'


export default function Overview(props) {
  return (
    <OverviewWapper>
      <div>
        <div><Icon color='red' className={props.icon}></Icon></div>
        <Title>{props.title}</Title>
        <Descreption>{props.description}</Descreption>
      </div>
    </OverviewWapper>
  )
}
