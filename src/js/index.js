import { getWeatherData } from "./api.js";
import { createHeader } from "./createHeader.js";
import { appContent } from "./appContent.js";

const app = async () => {
  const weather = await getWeatherData("Воронеж");
  const header = createHeader(weather.name);
  const content = appContent(weather);
  document.querySelector("#app").append(header, content);
  // console.log(weather);
};
app();
