import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";


export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAz9E89VfDB5p1Ec_gaMH0rMK-X6xa_Gf0'
  });

  return isLoaded ? <Map /> : null;
}
