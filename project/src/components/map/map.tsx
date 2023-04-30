import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { UrlImage } from '../../const';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/types';

type MapProps = {
  offers: Offer[] | undefined;
  selectedOffer: Offer | undefined;
}

function Map({ offers, selectedOffer }: MapProps) {
  const mapRef = useRef(null);
  const city = offers && !!offers.length && offers[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    const defaultCustomIcon = new Icon({
      iconUrl: UrlImage.MapMarkerDefault,
      iconSize: [23, 36],
      iconAnchor: [20, 40],
    });

    const currentCustomIcon = new Icon({
      iconUrl: UrlImage.MapMarkerCurrent,
      iconSize: [23, 36],
      iconAnchor: [20, 40],
    });

    if (map && offers) {
      offers.forEach((offer) =>
        new Marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }
        ).setIcon(
          selectedOffer !== undefined && offer.id === selectedOffer.id ?
            currentCustomIcon :
            defaultCustomIcon
        ).addTo(map)
      );
    }

    return () => {
      map?.eachLayer((layer) => {
        if (layer.getPane()?.classList.contains('leaflet-marker-pane')) {
          layer.remove();
        }
      });
    };
  }, [map, offers, selectedOffer]
  );

  return (
    <section style={{ height: '100%', width: '100%' }} ref={mapRef}></section>
  );
}

export default Map;
