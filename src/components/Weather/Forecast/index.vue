<template>
    <div id="forecast">
        <h2>Forecast</h2>
        <div :key="forecast.id" v-for="forecast in forecasts"> 
            <div class="card-forecast">
                <p>{{forecast.date}}</p>
                <div class="forecast-temperature">
                    <img :src=forecast.day.condition.icon alt="forecastIcon">
                    <p class="forecast-temperature-state">{{forecast.day.condition.text}}</p>
                    <div class="min-max-container">
                        <div class="min-forecast">
                            <span>MIN </span>
                            <span>{{forecast.day.mintemp_c}} C</span>
                        </div>
                        <div class="max-forecast">
                            <span>MAX </span>
                            <span>{{forecast.day.maxtemp_c}} C</span>
                        </div>
                    </div>
                </div>
                <div class="forecast-general-info">
                    <p class="forecast-info">WIND SPEED : {{forecast.day.maxwind_kph}} KM/H</p>
                    <p class="forecast-info">HUMUDITY : {{forecast.day.avghumidity}} %</p>
                    <p class="forecast-info">CHANCE OF RAIN : {{forecast.day.daily_chance_of_rain}} %</p>
                    <p class="forecast-info">SUNRISE : {{forecast.astro.sunrise}}</p>
                    <p class="forecast-info">SUNSET  : {{forecast.astro.sunset}}</p>
                    <p class="forecast-info">MOONSET : {{forecast.astro.moonrise}}</p>
                    <p class="forecast-info">MOONSET : {{forecast.astro.moonset}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Forecast",
    props : {
        forecasts : Array
    }
}
</script>

<style>

</style>