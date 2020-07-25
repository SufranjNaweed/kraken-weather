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
        const url = "https://kraken-weather.herokuapp.com/api/weathers/" + city;
        console.log("fetchTodayWeather -> url", url)
        const response = await axios.get(url)
        console.log("fetchTodayWeather -> response", response.data)
        commit("setTodayWeather", response.data);
    },
    async fetchForecastWeather({commit}, city){
        const url = "https://kraken-weather.herokuapp.com/api/weathers/forecast/" + city;
        const response = await axios.get(url)
        console.log("fetchForecastWeather -> response.data.forecast", response.data.forecast.forecastday)
        commit("setForecastWeather", response.data.forecast.forecastday);
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