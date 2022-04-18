import React from 'react'
import GoogleMapReact from 'google-map-react';

const Googlemaps = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAVBX1x1Czqfxd2aC6HSNluZsRFLnpzbGg' }}
          defaultCenter={59.955413}
          defaultZoom={30.337844}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
  )
}

export default Googlemaps