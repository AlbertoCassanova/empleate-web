import { Map, MapCameraChangedEvent } from "@vis.gl/react-google-maps"


const Home = () => {
  return (
    <div>
      <Map
        style={{
          width: "55rem",
          height: "35rem"
        }}
        defaultZoom={13}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
      </Map>
    </div>
  )
}

export default Home