import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import OptimizationGoalForm from "../OptimizationGoalForm";
import ic from '../../Emblem_IC.png'

import style from './index.module.css'


mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: this.props.value.features[0].properties.stopps[0].address.lon,
      lat: this.props.value.features[0].properties.stopps[0].address.lat,
      zoom: 10.8,
      stopps: [],
    };

      this.props.value.features.map((feature) => feature.properties.points.map((point) => {this.state.stopps.push(point)}))
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });



    map.on("load" , () => {

      map.loadImage(ic, function(error, image) {
        if (error) throw error;
        map.addImage('test', image);
      })

      map.addLayer({
        "id": "tour" ,
        "type": "line",
        "source": {
          "type": "geojson",
          "data": this.props.value

        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": {type: 'identity', property: 'stroke'},
          "line-opacity": {type: 'identity', property: 'stroke-opacity'},
          "line-width": 2
        }
      });

      map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": this.state.stopps
          }
        },
        "layout": {
          "icon-image": "test",
          "icon-size": 0.23,
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0,1.2],
          "text-anchor": "top"
        }
      });

    })



    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });

    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div className="container u-full-width u-max-full-width">
        <div className={style.container}>
          <div className="row">
            <div className={style.coordinates}>
              <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
            </div>
            <div ref={el => this.mapContainer = el} className={style.map} />
          </div>
        </div>
      </div>
    );
  }
}

export default Application;