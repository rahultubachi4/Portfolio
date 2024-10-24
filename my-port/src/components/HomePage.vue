<template>
    <section id="home">
        <div class="Home">
            <div class="img">
                <img src="@/assets/photo (2).jpeg" alt="Portfolio Image" class="portfolio-img">
            </div>
            <div class="info">
                <h1>Hello, I'm Rahul</h1>
                <span>UI Developer Intern</span><br><br>
                <span id="lorem">"I am eager to learn new skills and have a strong,<br> interest in coding and design, which motivates,<br> me to contribute creatively to projects."</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.Home {
    font-family: "Montserrat", sans-serif;
    height: 600px;
    background-color: #1b1b1b;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 250px 18px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
    padding: 20px;
    border-radius: 15px;
    position: relative;
}

.img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    margin-top: 90px;
}

.info {
    height: 50%;
    text-align: center;
}

.portfolio-img {
    height: 280px;
    width: 280px;
    border-radius: 50%;
}

.portfolio-img:hover {
    transform: scale(1.03) translateY(-35px);
}

.info h1 {
    margin: 0;
    word-spacing: 10px;
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(to right, #6cff52, #3ec5ff);
    -webkit-background-clip: text;
    background-clip: text;
    box-shadow: 0px 4px 3px rgb(68, 68, 68);
    margin-top: 14px;
}

.info span {
    font-size: 22px;
    text-align: center;
    color: transparent;
    line-height: 33px;
    word-spacing: 5px;
    font-weight: bold;
    background: linear-gradient(to right, #6cff52, #3ec5ff);
    -webkit-background-clip: text;
    background-clip: text;
    box-shadow: 0px 4px 3px rgb(68, 68, 68);
}

#lorem {
    font-size: 20px;
    text-align: center;
    color: white;
    line-height: 36px;
    word-spacing: 5px;
    font-weight: bold;
    padding: 4px;
    box-shadow: 0px 4px 3px rgb(68, 68, 68);
}

/* Laptop */
@media screen and (max-width: 1440px) {
    .Home {
        margin: 0 150px;
    }

    .portfolio-img {
        height: 260px;
        width: 260px;
    }

    .info h1 {
        font-size: 34px;
    }

    .info span {
        font-size: 21px;
    }

    #lorem {
        font-size: 19px;
    }
}

/* Tablet */
@media screen and (max-width: 1024px) {
    .Home {
        height: auto;
        padding: 20px;
        margin: 0 50px;
    }

    .portfolio-img {
        height: 240px;
        width: 240px;
    }

    .info h1 {
        font-size: 32px;
    }

    .info span {
        font-size: 20px;
    }

    #lorem {
        font-size: 18px;
    }
}

/* Mobile */
@media screen and (max-width: 768px) {
    .Home {
        padding: 20px;
        margin: 0 20px;
    }

    .portfolio-img {
        height: 200px;
        width: 200px;
    }

    .info h1 {
        font-size: 28px;
    }

    .info span {
        font-size: 18px;
    }

    #lorem {
        font-size: 16px;
    }
}

/* Small Mobile */
@media screen and (max-width: 480px) {
    .portfolio-img {
        height: 150px;
        width: 150px;
    }

    .info h1 {
        font-size: 24px;
    }

    .info span {
        font-size: 16px;
    }

    #lorem {
        font-size: 14px;
    }
}
</style>
