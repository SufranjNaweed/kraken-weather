<template>
    <form @submit="onSubmit">
        <input type="text" name="city" id="city" v-model="city">
        <input type="submit" value="SEARCH">
    </form>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name : "FormSearchWeather",
    data : function() {
        return {
            city : ""
        }
    },
    methods : {
        ...mapActions(['searchCity']),
        onSubmit(e){
            e.preventDefault();
            this.searchCity(this.city);
            this.city = "";
        }
    },
}
</script>

<style>

</style>