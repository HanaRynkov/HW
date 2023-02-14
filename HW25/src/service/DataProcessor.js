import { weatherConfig } from "./config/weather-config.js";

export class DataProcessor {
    #url
    #cities
    constructor(url, cities) {
        this.#url = url;
        this.#cities = cities;
    }
    async getData(city) {

        const responseFromServer =
            await fetch(`${this.#url}&latitude=${this.#cities[city].latitude}&longitude=${this.#cities[city].longitude}`);
        return responseFromServer.json();


    }
    checkExceptions(startDate, endDate, hourFrom, hourTo){
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
        if(startDate < date || endDate < (date + 16)|| endDate < startDate || (hourFrom < 0 && hourFrom > 23) || (hourTo > 23 && hourTo < 0)){
            return "Error!!!"
        }
    }
    async getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        if (this.checkExceptions(startDate, endDate, hourFrom, hourTo)) {
            return;
          }
        const responseFromServer =
            await fetch(`${this.#url}&latitude=${this.#cities[city].latitude}&longitude=${this.#cities[city].longitude}&forecast_days=16&start_date=${startDate}&end_date=${endDate}`);
        const dateAr = await responseFromServer.json();
        const dataHoursAr = dateAr.hourly.time.map(t => new Date(t).getHours());
        // const temperaturesAr = dateAr.hourly.temperature_2m;
        const dataObj = dateAr.hourly.time.reduce((acc, cur, i) => {
            if (i >= hourFrom && i <= hourTo) {
              acc.push({
                date: cur,
                hour: dataHoursAr[i],
                temperature: dateAr.hourly.temperature_2m[i]
              });
            }
            return acc;
          }, []);
        // const dataObj = dateAr.hourly.time.map(elm => elm.split("T")).reduce((acc, cur, index) => {
        //     if (index >= hourFrom && index <= hourTo) {
        //         acc.push({ date: cur[0], hour: cur[1], temperature: temperatureAr[index] });
        //     }
        //     return acc;
        // }, []);
        return dataObj;

    }

    
} 