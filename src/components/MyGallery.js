import React from 'react'
import Gallery from 'react-photo-gallery'
import PortCinco from '../assets/images/gallery/PortCinco4.jpg'
import PortSugar from '../assets/images/gallery/PortSugar1.jpg'
import PortDmon from '../assets/images/gallery/PortDmon1.jpg'
import PortA1 from '../assets/images/gallery/PortA1.jpg'
import PortOzona from '../assets/images/gallery/PortOzona1.jpg'
import PortMath from '../assets/images/gallery/PortMath.jpg'
import PortVoyage from '../assets/images/gallery/PortVoyage.jpg'
import PortGBTClogo from '../assets/images/gallery/PortGBTClogo.jpg'
import PortEden from '../assets/images/gallery/PortEden.jpg'

export default class MyGallery extends React.Component {
  render() {
    return (
      <Gallery
        margin={0}
        direction="row"
        photos={PHOTO_SET}
        onClickPhoto={this.openLightbox}
      />
    )
  }
}
const PHOTO_SET = [
  {
    src: PortOzona,
    width: 3,
    height: 3,
    alt: 'image 1',
  },
  {
    src: PortSugar,
    width: 3,
    height: 3,
    alt: 'image 2',
  },
  {
    src: PortGBTClogo,
    width: 3,
    height: 3,
    alt: 'image 3',
  },
  {
    src: PortA1,
    width: 3,
    height: 3,
    alt: 'image 4',
  },
  {
    src: PortCinco,
    width: 3,
    height: 3,
    alt: 'image 5',
  },
  {
    src: PortMath,
    width: 3,
    height: 3,
    alt: 'image 6',
  },
  {
    src: PortVoyage,
    width: 3,
    height: 3,
    alt: 'image 7',
  },
  {
    src: PortDmon,
    width: 3,
    height: 3,
    alt: 'image 7',
  },
  {
    src: PortEden,
    width: 3,
    height: 3,
    alt: 'image 7',
  },
]
