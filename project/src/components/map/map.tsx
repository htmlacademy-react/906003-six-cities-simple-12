import { useEffect, useRef } from 'react';
import { Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { UrlImages } from '../../const';
import useMap from '../../hooks/useMap';
import { Location } from '../../types/types';

type MapProps = {
  points: {
    id: number;
    location: Location;
  }[];
  selectedCardId: number;
}

function Map({ points, selectedCardId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, points[0].location);

  const defaultCustomIcon = new Icon({
    iconUrl: UrlImages.MapMarkerDefault,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: UrlImages.MapMarkerCurrent,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.map((point) =>
        new Marker(
          {
            lat: point.location.coordinates.latitude,
            lng: point.location.coordinates.longitude,
          }
        ).setIcon(
          selectedCardId !== undefined && point.id === selectedCardId ?
            currentCustomIcon :
            defaultCustomIcon
        ).addTo(map)
      );
    }
  }, [map, points, selectedCardId]
  );

  return (
    <section className='cities__map map' ref={mapRef}></section>
  );
}

export default Map;
