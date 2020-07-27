<template>
    <div id="today">
        <div class="container-today columns" v-if="today.current">
            <div class="left column">{{today.current.temp_c}} C</div>
            <div class="middle column">
                <p class="city">{{today.location.name}}</p>
                <div class="today-icon"><img :src=today.current.condition.icon alt=""></div>
                <p class="today-type">{{today.current.condition.text}}</p>
            </div>
            <div class="right column">
                <p class="today-info">UV : {{today.current.uv}}</p>
                <p class="today-info">wind direction : {{today.current.wind_dir}}</p>
                <p class="today-info">wind speed : {{today.current.wind_kph}} km/h</p>
                <p class="today-info">humidity : {{today.current.humidity}} %</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Today",
    props : {
        today : Object
    },
}
</script>

<style lang="scss" scoped>
    #today{
        display: flex;
        align-items: center;
        margin: auto auto 40px;
        padding: 10px;
        width: 100%;
        max-width: 900px;
        min-height: 230px;
        border-radius: 8px;
        background-color: rgba(75, 178, 249, 0.08);
        @media screen and (min-width: 689px){
            margin: auto auto 65px;
        }
        .container-today{
            display: flex;
            width: 100%;
            flex-direction: column;
            vertical-align: middle;
            align-items: center;
            text-align: center;
            @media screen and (min-width: 689px){
                flex-direction: row;
            }
            .left{
                font-size: 40px;
                font-weight: bold;
                @media screen and (min-width: 689px){
                    font-size: 73px;
                }
            }
            .middle{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size: 16px;
                font-weight: bold;
                letter-spacing: 3px;
                text-transform: uppercase;
                @media screen and (min-width: 689px){
                    font-size: 22px;
                }
                .today-icon{
                    img{
                        margin: auto;
                        width: 100px;
                        @media screen and (min-width: 689px){
                            width: 120px;
                        }
                    }
                }
            }
            .right{
                display: flex;
                font-weight: bold;
                flex-direction: column;
                justify-content: space-between;
                .today-info{
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 16px;
                    @media screen and (min-width: 689px){
                        margin-bottom: 0;
                        margin-top: 20px;
                        text-align: right;
                    }
                }
            }

        }
    }
</style>