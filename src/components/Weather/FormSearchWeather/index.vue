<template>
    <form @submit="onSubmit">
            <input v-model="city" class="input is-primary" type="text" name="city" id="city" placeholder="enter your city, example : Paris">
            <input class="button" type="submit" value="SEARCH" />
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

<style lang="scss" scoped>
    $greenSearchButton : #2A9D8F;
    form{
        display: flex;
        align-items:center;
        justify-content: center;
        margin: 90px auto 67px;
        input[type=text]{
            max-width: 80%;
            min-height: 60px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #000;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            @media screen and (min-width: 689px){
                max-width: 700px;
                min-height: 60px;
            }
        }
        input[type=submit]{
            width: 100%;
            max-width: 140px;
            min-height: 60px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            font-weight: bold;
            background-color: $greenSearchButton;
            color: #fff;
        }
    }

</style>