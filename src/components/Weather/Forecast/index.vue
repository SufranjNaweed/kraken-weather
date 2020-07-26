<template>
    <div id="forecast">
        <div class="card-forecast" :key="forecast.id" v-for="forecast in forecasts"> 
            <h3>{{moment(forecast.date).format('dddd')}}</h3>
            <div class="forecast-temperature">
                <img :src=forecast.day.condition.icon alt="forecastIcon">
                <p class="forecast-temperature-state">{{forecast.day.condition.text}}</p>
                <div class="min-max-container">
                    <div class="min-forecast">
                        <span class="forecast-title">MIN </span>
                        <span class="forecast-temp">{{forecast.day.mintemp_c}} C</span>
                    </div>
                    <div class="max-forecast">
                        <span class="forecast-title">MAX </span>
                        <span class="forecast-temp">{{forecast.day.maxtemp_c}} C</span>
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
</template>

<script>

export default {
    name : "Forecast",
    props : {
        forecasts : Array
    }
}
</script>

<style lang="scss" scoped>
#forecast{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    @media screen and (min-width: 689px){
        flex-direction: row;
    }

    .card-forecast{
        width: 100%;
        margin: auto;
        margin-bottom: 20px;
        padding: 20px;
        max-width: 350px;
        border-radius: 8px;
        text-align: center;
        background-color: rgba(75, 178, 249, 0.08);
        h3{
            text-transform: uppercase;
            font-size: 30px;
            font-weight: bold;
            letter-spacing: 2px;
        }
        .forecast-temperature{
            img{
                width: 120px;
                margin: 25px auto auto;
            }
            .forecast-temperature-state{
                text-transform: uppercase;
                font-size: 16px;
                font-weight: bold;
                letter-spacing: 3px;
                min-height: 45px;
                margin: 20px auto;
            }
            .min-max-container{
                display: flex;
                justify-content: space-evenly;
                margin-bottom: 30px;
                .min-forecast, .max-forecast{
                    .forecast-title{
                        font-size: 26px;
                        font-weight: lighter;
                        letter-spacing: 3px;
                    }
                    .forecast-temp{
                        font-size: 32px;
                        font-weight: lighter;
                        letter-spacing: 3px;
                    }
                }
                .min-forecast{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                }
                .max-forecast{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }
        }
        .forecast-general-info{
            .forecast-info{
                font-weight: lighter;
                font-size: 18px;
                letter-spacing: 4px;
                text-transform: uppercase;
                margin-bottom: 20px;
            }
        }
    }
}
</style>