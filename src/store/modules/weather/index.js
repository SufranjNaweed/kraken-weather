import axios from 'axios'

const state = {
    todayWeather    : {},
    forecastWeather : []
};

const getters = {
    getTodayWeather : (state) => state.todayWeather,
    getForecastWeather : (state) => state.forecastWeather
};

const actions = {
    async fetchTodayWeather({commit}, city){
        try{
            if(city){
                const url = "https://kraken-weather.herokuapp.com/api/weathers/" + city;
                const response = await axios.get(url)
                commit("setTodayWeather", response.data);
            }
        }
        catch(err){
            console.log(err);
        }
    },
    async fetchForecastWeather({commit}, city){
        try{
            if(city){
                const url = "https://kraken-weather.herokuapp.com/api/weathers/forecast/" + city;
                const response = await axios.get(url);
                commit("setForecastWeather", response.data.forecast.forecastday);
            }
        }
        catch(err){
            console.log(err);
        }
    },
    async searchCity({dispatch},city){
        try{
            if(city){
                dispatch("fetchTodayWeather", city);
                dispatch("fetchForecastWeather", city);
            }
        }
        catch(err){
            console.log(err);
        }
    }
};

const mutations = {
    setTodayWeather : (state, weather) => (state.todayWeather = weather),
    setForecastWeather : (state, weather) => (state.forecastWeather = weather)
};

export default {
    state,
    getters,
    actions,
    mutations
}