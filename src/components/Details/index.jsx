import React from 'react'
import Link from 'gatsby-link'

import Envelope from '../../../static/about/envelope.svg'
import Phone from '../../../static/about/phone.svg'
import Marker from '../../../static/about/marker.svg'

import './style.scss'

const Details = () => (
    <div className="details-container">
        <p>
        I’m Ismail Ghallou, also known as Smakosh, I’m a self-taught Graphic, 
        UI/UX Designer and front end developer. I'm really interested in Technology.
        Science including mathematics, physics, Ai, Blockchain & computer science 
        in general belong to my interests as well, you can know more about me by 
        reading my <Link to="/blog" >articles</Link>.
        </p>
        <p>
            Currently working remotely at <a href="https://obytes.com/?ref=smakosh" target="_blank" >Obytes</a> as a Front end engineer.
        </p>
        <p>
        For business inquiries feel free to get in touch with me :
        </p>
        <div className="details">
            <p>
              <img src={Envelope} alt="email" className="mr1" />
              ismai23l@hotmail.com
            </p>
            <p>
                <img src={Phone} alt="phone" className="mr1" />
                +212 663-532761
            </p>
            <p>
                <img src={Marker} alt="address" className="mr1" />
                Nr 23 Lot El Waha, Errachidia, Morocco
            </p>
        </div>
    </div>
)

export default Details