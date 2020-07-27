<template>
  <section id="about">
    <h1>About</h1>
        <div class="question">
                <h2>What's Kraken Weather</h2>
                <p>Kraken Weater is a webapp who use data from <a href="https://www.weatherapi.com/" target="_blank">weatherapi</a> to provide you the weather of a given city</p>
        </div>
        <div class="question">
            <h2>What tech do you use ?</h2>
            <ul>
                <li>VueJS</li>
                <li>VueRouter</li>
                <li>Vuex</li>
                <li>Axios</li>
                <li>Buefy</li>
                <li>MomentJS</li>
            </ul>
        </div>
        <div class="question">
            <h2>Where can we find the source code ?</h2>
            <p>Here's the repository <a href="https://github.com/SufranjNaweed/kraken-weather" target="_blank">https://github.com/SufranjNaweed/kraken-weather</a></p>
        </div>
  </section>
</template>

<script>
export default {
    name: "AboutContent"
}
</script>

<style lang="scss" scoped>
    #about{
        min-height: 80vh;
        h1{
            letter-spacing: 4px;
            text-align: center;
            text-transform: uppercase;
            font-size: 48px;
            margin: 20px auto;
        }
        .question{
            margin: 50px auto 50px 20px;
            h2{
                font-weight: bold;
                margin-bottom: 15px;
                font-size: 28px;
            }
            p{
                margin-bottom: 10px;
                font-size: 22px;
                padding: 20px;
                a{
                    word-break: break-word;
                    color: #fff;
                }
            }
            ul{
                margin-left: 20px;
                li{
                    margin: 10px auto;
                    font-size: 22px;
                }
            }
        }
    }
</style>