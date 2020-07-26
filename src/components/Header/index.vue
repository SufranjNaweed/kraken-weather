<template>
    <header class="header">
        <h1>Kraken Weather</h1>
        <nav>
            <ul>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </ul>
        </nav>
  </header>
</template>

<script>
export default {
    name : "Header"
}
</script>

<style lang="scss" >
.header{
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-transform: uppercase;
    @media screen and (min-width: 689px){
        padding-top: 35px;
        flex-direction: row;
    }
    h1{
        width: 100%;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        @media screen and (min-width: 689px){
            text-align: left;
            font-size: 32px;
            margin-left: 25px;
            width: 80%;
        }
    }
    nav{
       width: 100%;
        @media screen and (min-width: 689px){
            width: 19%;
            margin-right: 25px;
        }
        ul{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: row;
            a{
                display: block;
                font-size: 20px;
                font-weight: bold;
                color: #fff;
            }
        } 
    }
 
}
</style>