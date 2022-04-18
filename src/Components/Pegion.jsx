import React from 'react'
import { Map, Marker } from "pigeon-maps"

const Pegion = () => {
  return (
    <Map height={500} defaultCenter={[34.98079481244147, 9.40484921475877]} defaultZoom={8}>
      <Marker width={50} anchor={[34.98079481244149, 9.40484921475872]} />
      <Marker width={50} anchor={[34.98079481244146, 9.40484921475876]} />
      <Marker width={50} anchor={[34.98079481244145, 9.40484921475874]} />
    </Map>
  )
}

export default Pegion