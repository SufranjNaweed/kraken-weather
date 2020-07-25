<template>
    <header>
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

<style>
    header{
        display: flex;
        width: 100%;
        align-items: center;
    }

    h1{
        width: 60%;
    }
    nav{
        width: 40%;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
    }
    a{
        display: block;
    }
</style>