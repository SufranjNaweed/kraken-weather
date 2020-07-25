<template>
    <div id="today">
        <h2>Today</h2>
        <div class="container-today" v-if="today.current">
            <div class="left">{{today.current.temp_c}} C</div>
            <div class="middle">
                <p class="city">{{today.location.name}}</p>
                <div class="today-icon"><img :src=today.current.condition.icon alt=""></div>
                <p class="today-type">{{today.current.condition.text}}</p>
            </div>
            <div class="right">
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
    created() {
        console.log("today => ", this.today)  //undefined;
    },
}
</script>

<style>

</style>