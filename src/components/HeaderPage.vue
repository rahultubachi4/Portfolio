<template>
    <div class="header">
        <ul class="links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.header {
    font-family: "Montserrat", sans-serif;
    height: 110px;
    background-color: #1b1b1b;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
    overflow-x: auto;
    white-space: nowrap;
    margin-top:-3px;
}

.links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 10px 0;
    list-style: none;
    font-size: 23px;
    color: white;
    white-space: nowrap; 
}

.links li {
    position: relative;
}

.links a {
    text-decoration: none;
    color: inherit;
    padding: 10px 25px;
    border-radius: 10px;
    transition: all 0.3s ease;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2),
                -5px -5px 10px rgba(255, 255, 255, 0.3);
}

.links a:hover {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2),
                inset -5px -5px 10px rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
}



/* For large laptops and desktops (max-width: 1440px) */
@media screen and (max-width: 1440px) {
    .links {
        gap: 40px;
        font-size: 22px;
    }
}

/* For tablets (max-width: 1024px) */
@media screen and (max-width: 1024px) {
    .links {
        gap: 30px;
        font-size: 21px;
    }
}

/* For mobile devices (max-width: 768px) */
@media screen and (max-width: 768px) {
    .links {
        gap: 20px;
        font-size: 20px;
    }

    .links li {
        flex-shrink: 0; 
    }
}

/* For small mobile devices (max-width: 480px) */
@media screen and (max-width: 480px) {
    .header {
        height: auto;
        padding: 10px;
        overflow-x: auto; 
    }

    .links {
        gap: 10px;
        font-size: 18px;
        align-items: flex-start;
        justify-content: flex-start;
        overflow-x: auto;
    }

    .links a {
        padding: 8px 15px;
        width: 100%;
    }

    .links li {
        flex-shrink: 0;
    }
}
</style>
