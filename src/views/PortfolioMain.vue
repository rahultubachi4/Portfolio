<template>
    <div id="app">
        <HeaderPage></HeaderPage>
        <div class="content">
            <HomePage></HomePage>
            <AboutPage></AboutPage>
            <SkillsPage></SkillsPage>
            <ServicePage></ServicePage>
            <ContactPage></ContactPage>
        </div>
    </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import SkillsPage from "../components/SkillsPage.vue";
import ServicePage from "../components/ServicePage.vue";
import ContactPage from "../components/ContactPage.vue";

export default {
    name: 'PortfolioMain',
    components: {
        HeaderPage,
        HomePage,
        AboutPage,
        SkillsPage,
        ServicePage,
        ContactPage
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

#app {
    font-family: "Montserrat", sans-serif;
    height: 100vh; 
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.header {
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; 
}

.content {
    padding-top: 110px; 
    height: 128vh; 
    overflow-y: none; 
    background-color: #1b1b1b;
}

/* Laptop */
@media screen and (max-width: 1440px) {
    .content {
        padding-top: 100px; 
        height: auto; 
    }
}

/* Tablet */
@media screen and(max-width: 1024px) {
    .content {
        padding-top: 90px; 
        height: auto; 
    }
}

/* Mobile */
@media screen and(max-width: 768px) {
    .content {
        padding-top: 80px; 
        height: auto; 
    }

    #app {
        height: auto; 
    }
}

/* Small Mobile View */
@media screen and(max-width: 480px) {
    .header {
        height: auto; 
    }

    .content {
        padding-top: 70px; 
    }

    .content h1 {
        font-size: 20px;
    }

    .content p {
        font-size: 14px; 
    }
}
</style>
