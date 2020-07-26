<template>
    <div id="mainlayout">
        <div class="container">
            <Header />
            <slot />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';

export default {
    name : "MainLayout",
    components : {
        Header,
        Footer
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