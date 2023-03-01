// import { getWeatherData } from "./api.js";

export const heandleWeatherByGeolocation = () => {
  const options = {
    enableHeighAccuracy: true,
    timeout: 500,
    maximumAge: 0,
  };
  const success = async (pos) => {
    const crd = pos.coords;
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=ru&apiKey=5ea9c7db826548f89523c51287d5685b`
    );
    const result = await response.json();
    console.log(result);
    // const weather = await getWeatherData(result.features[0].properties.city);
  };

  const error = (err) => {
    console.log(`${err.code} ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};
