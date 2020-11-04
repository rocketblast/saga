import React, { useEffect } from 'react'

const { REACT_APP_GOOGLE_MAPS_JS_API_KEY } = process.env

const nightModeHiddenPOIs = [
  {
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
]

const initMap = () => {
  const ostermalm = { lat: 59.3358231, lng: 18.0844626 }
  const kungsholmen = { lat: 59.3291301, lng: 18.0394391 }
  const center = { lat: 59.3320624, lng: 18.0606771 }

  const map = new window.google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center,
    styles: nightModeHiddenPOIs
  })

  new window.google.maps.Marker({
    position: ostermalm,
    map: map,
    label: 'B',
    animation: window.google.maps.Animation.DROP,
  })

  new window.google.maps.Marker({
    position: kungsholmen,
    map: map,
    label: 'A',
    animation: window.google.maps.Animation.DROP,
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
