<template>
  <div>
    <div id="today">
        <h2>Today</h2>
        <div class="container-today">
            <div class="left">{{getTodayWeather.current.temp_c}} C</div>
            <div class="middle">
                <p class="city">{{getTodayWeather.location.name}}</p>
                <div class="today-icon"><img :src=getTodayWeather.current.condition.icon alt=""></div>
                <p class="today-type">{{getTodayWeather.current.condition.text}}</p>
            </div>
            <div class="right">
                <p class="today-info">UV : {{getTodayWeather.current.uv}}</p>
                <p class="today-info">wind direction : {{getTodayWeather.current.wind_dir}}</p>
                <p class="today-info">wind speed : {{getTodayWeather.current.wind_kph}} km/h</p>
                <p class="today-info">humidity : {{getTodayWeather.current.humidity}} %</p>
            </div>
        </div>
    </div>
    <div id="forecast">
        <h2>Forecast</h2>
        <div :key="forecastDay.id" v-for="forecastDay in getForecastWeather"> 
            <div class="card-forecast">
                <p>{{forecastDay.date}}</p>
                <div class="forecast-temperature">
                    <img :src=forecastDay.day.condition.icon alt="forecastIcon">
                    <p class="forecast-temperature-state">{{forecastDay.day.condition.text}}</p>
                    <div class="min-max-container">
                        <div class="min-forecast">
                            <span>MIN </span>
                            <span>{{forecastDay.day.mintemp_c}} C</span>
                        </div>
                        <div class="max-forecast">
                            <span>MAX </span>
                            <span>{{forecastDay.day.maxtemp_c}} C</span>
                        </div>
                    </div>
                </div>
                <div class="forecast-general-info">
                    <p class="forecast-info">WIND SPEED : {{forecastDay.day.maxwind_kph}} KM/H</p>
                    <p class="forecast-info">HUMUDITY : {{forecastDay.day.avghumidity}} %</p>
                    <p class="forecast-info">CHANCE OF RAIN : {{forecastDay.day.daily_chance_of_rain}} %</p>
                    <p class="forecast-info">SUNRISE : {{forecastDay.astro.sunrise}}</p>
                    <p class="forecast-info">SUNSET  : {{forecastDay.astro.sunset}}</p>
                    <p class="forecast-info">MOONSET : {{forecastDay.astro.moonrise}}</p>
                    <p class="forecast-info">MOONSET : {{forecastDay.astro.moonset}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name : "SearchCity",
    methods : {
        ...mapActions(['fetchTodayWeather', 'fetchForecastWeather'])
    },
    computed : mapGetters(["getTodayWeather", "getForecastWeather"]),
    created() {
        this.fetchTodayWeather("paris");
        this.fetchForecastWeather("paris");
    },
}
</script>

<style>

</style>