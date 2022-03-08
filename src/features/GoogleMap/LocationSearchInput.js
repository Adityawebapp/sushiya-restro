import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Geocode from "react-geocode";

export default function LocationSearchInput() {
  const [addressState, setAddressState] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleChange = (address) => {
    setAddressState(address);
  };
  Geocode.setApiKey("AIzaSyBMKjOfr-vsOYRI5MhiFsaw0bb026Gorok");

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setLat(latLng["lat"]);
        setLng(latLng["lng"]);

        Geocode.fromLatLng(latLng["lat"], latLng["lng"]).then(
          (response) => {
            const address = response.results[0].formatted_address;
            let city, state, country;
            for (
              let i = 0;
              i < response.results[0].address_components.length;
              i++
            ) {
              for (
                let j = 0;
                j < response.results[0].address_components[i].types.length;
                j++
              ) {
                switch (response.results[0].address_components[i].types[j]) {
                  case "locality":
                    city = response.results[0].address_components[i].long_name;
                    setCity(city)
                    break;
                  case "administrative_area_level_1":
                    state = response.results[0].address_components[i].long_name;
                    break;
                  case "country":
                    country =
                      response.results[0].address_components[i].long_name;
                      setCountry(country)
                    break;
                  default:
                }
              }
            }
            console.log(city, state, country ,"count,state and city name");
            console.log(address);
          },
          (error) => {
            console.error(error);
          }
        );
      })
      .catch((error) => console.error("Error", error));
  };
  console.log("lat", lat);
  console.log("lng", lng);

  return (
    <>
      <input type="hidden" value={lat} id="lat" />
      <input type="hidden" value={lng} id="lng" />
      <PlacesAutocomplete
        value={addressState}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              id="address"
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input form-control",
              })} 
            />
<div className="row">
            {
                country && (<div  className="col-md-6 mt-3">
                <label className="colorblack bold">Country</label>
                <input type="text" id="country" value={country} className="form-control" />
                </div>)
         
            }
            {
                
                city && (<div  className="col-md-6 mt-3">
                <label className="colorblack bold">City</label>
                <input type="text" id="city" value={city} className="form-control" />
                </div>)
            }
            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "orange", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <p>{suggestion.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
}
