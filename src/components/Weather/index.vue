<template>
  <div>
    <FormSearchWeather />
    <Today v-bind:today="getTodayWeather" />
    <Forecast v-bind:forecasts="getForecastWeather"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import FormSearchWeather from './FormSearchWeather';
import Today from './Today';
import Forecast from './Forecast';

export default {
    name : "Weather",
    components : {Today, Forecast, FormSearchWeather},
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