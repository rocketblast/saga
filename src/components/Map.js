import React, { useEffect } from 'react'

const { REACT_APP_GOOGLE_MAPS_JS_API_KEY } = process.env

const initMap = () => {
  const ostermalm = { lat: 59.3358231, lng: 18.0844626 }
  const kungsholmen = { lat: 59.3291301, lng: 18.0394391 }
  const center = { lat: 59.3320624, lng: 18.0606771 }

  const map = new window.google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center,
  })

  new window.google.maps.Marker({
    position: ostermalm,
    map: map,
  })
  new window.google.maps.Marker({
    position: kungsholmen,
    map: map,
  })
}

const GoogleMap = () => {    
  useEffect(() => {
    const script = document.createElement('script')
    script.src=`https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAPS_JS_API_KEY}&libraries=places&v=weekly`
    script.async = true
    script.defer = true
    script.onload = () => {
      initMap()
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  },[])

  return <div id="map" style={{ width: '100%', height: '300px' }} />
}

export default GoogleMap
