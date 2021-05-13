import GoogleMaps from "simple-react-google-maps";
export const MapO = () => {
  return (
    <GoogleMaps
      apiKey={"AIzaSyA27XHu6gzyRdjeexCIgvZ2iPtHU-6ShxI"}
      style={{ height: "400px", width: "100%" }}
      zoom={6}
      center={{ lat: 48, lng: 22 }}
      markers={{ lat: 47.0514, lng: 21.9403 }}
    />
  );
};
