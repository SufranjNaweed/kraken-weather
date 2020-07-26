<template>
    <div id="mainlayout">
        <div class="container">
            <Header />
            <slot />
        </div>
    </div>
</template>

<script>
import Header from '../Header';

export default {
    name : "MainLayout",
    components : {
        Header
    }
}
</script>

<style lang="scss" scoped>
$bgBody : #121212;
#mainlayout{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #FFFFFF;
    background-color: $bgBody;
    .container{
        background-color: #171F24;
    }
}
</style>