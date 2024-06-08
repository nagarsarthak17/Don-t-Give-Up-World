import React, {useEffect} from 'react'
import MotivateMe from './motivateme'
import CentreImage from './centreimage'
import Share from './share'
import './centreside.css'


export default function CentreSide(props) {
  return (
    <div className='centreside'>
               <CentreImage activeFilter={props.activeFilter}>
               </CentreImage>
               <MotivateMe></MotivateMe>
               <Share></Share>
    </div>
  )
}
