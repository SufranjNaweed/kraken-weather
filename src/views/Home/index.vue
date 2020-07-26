<template>
    <MainLayout>
        <Weather />
    </MainLayout>
</template>

<script>
import MainLayout from '@/components/MainLayout';
import Weather from '@/components/Weather';

export default {
    name : "Home",
    components : {
        MainLayout,
        Weather
    }
}
</script>

<style>
*{
    box-sizing: border-box;
}
</style>