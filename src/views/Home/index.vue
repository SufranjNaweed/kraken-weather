<template>
    <section>
        <Header />
        <Weather />
    </section>
</template>

<script>
import Header from '@/components/Header';
import Weather from '@/components/Weather';

export default {
    name : "Home",
    components : {
        Header,
        Weather
    }
}
</script>

<style>

</style>