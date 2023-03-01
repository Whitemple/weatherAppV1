export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1289f3b71732cf788b8ea917a6299964&lang=ru&units=metric`
    );
    return response.json();
  } catch (error) {
    return console.error(error);
  }
};
