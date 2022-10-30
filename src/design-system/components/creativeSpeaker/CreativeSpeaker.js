import React from 'react'
import emp from '../../../shared/assest/speakers/1.jpg'
import {SpeakerWrapper} from './style'

export default function CreativeSpeaker(props) {
  return (
    
      <SpeakerWrapper>
        <div><img src={props.src} alt={props.alt} height='180px' width='100%'/></div>
        <h2>{props.name}</h2>
        <p>{props.job}</p>
      </SpeakerWrapper>
    
  )
}
