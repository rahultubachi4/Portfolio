<template>
    <section id="about">
        <div class="About">
            <div class="img">
                <img src="@/assets/photo (2).jpeg" alt="Portfolio Image" class="portfolio-img">
            </div>

            <div class="about-info">
                <h1>ABOUT</h1>
                <span>
                    As a UI Developer intern, I am passionate about creating intuitive and engaging user experiences.
                    I am focused on front-end development and user interface design. I have hands-on experience with modern web technologies and design principles,
                    collaborating with a talented team to deliver high-quality applications. Eager to learn and grow in the field, I am committed to contributing innovative solutions that enhance user satisfaction.
                </span>
              
                <button type="button" class="button">Read More</button>

                <div class="icon-images">
                    <img src="@/assets/linkedin.png" alt="LinkedIn Image" class="linkedin">
                    <img src="@/assets/insta.png" alt="Instagram Image" class="insta">
                    <img src="@/assets/facebook.png" alt="Facebook Image" class="facebook">
                    <img src="@/assets/github.png" alt="GitHub Image" class="github">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.About {
    font-family: "Montserrat", sans-serif;
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 760px; 
    background-color: #1b1b1b;
    margin: -30px 0;
}

.img {
    width: 850px; 
    height: 800px; 
    margin: 0 10px; 
    margin-top: 370px;
    box-sizing: border-box; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
}

.about-info {
    width: 850px; 
    height: 700px; 
    margin: 0 10px; 
    margin-top: 60px;
    box-sizing: border-box; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
}

.portfolio-img {
    height: 260px;
    width: auto;
    border-radius: 50%;
    box-shadow: 
        15px 15px 20px rgba(0, 0, 0, 0.9), 
        -5px -5px 15px rgba(0, 0, 0, 0.7), 
        0px 0px 30px rgb(0, 0, 0); 
    transition: transform 0.3s ease;
    position: relative; 
    margin-top: -20px; 
    transform: rotateX(20deg);
}

.portfolio-img:hover {
    transform: scale(1.05) translateY(-35px); 
}

.about-info h1 {
    font-size: 35px;
    color: white;
    font-weight: bold;
    text-align: center; 
    color: transparent;
    background: linear-gradient(to right, #6cff52, #3ec5ff); 
    -webkit-background-clip: text; 
    background-clip: text; 
    box-shadow: 0px 4px 3px rgb(68, 68, 68); 
}

.about-info span {
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-align: center; 
    margin-top: 20px; 
    line-height: 25px;
    box-shadow: 0px 4px 3px rgb(68, 68, 68); 
}

.button {
    height: 40px;
    width: 140px;
    font-size: 20px;
    border-radius: 8px;
    margin-top: 40px;
    background-color: #1b1b1b;
    color: transparent;
    background: linear-gradient(to right, #6cff52, #3ec5ff); 
    -webkit-background-clip: text; 
    background-clip: text; 
    cursor: pointer;
}

.icon-images {
    display: flex;
    gap: 35px;
    height: 40px;
    margin-top: 50px;
    cursor: pointer;
    box-shadow: 0px 4px 3px rgb(0, 0, 0); 
}

.linkedin:hover, .insta:hover, .facebook:hover, .github:hover {
    transform: scale(1.09) translateY(-15px);
}

.linkedin, .insta, .facebook, .github {
    width: 40px;
}

/* Laptop and larger devices */
@media screen and (max-width: 1440px) {
    .About {
        flex-direction: column; 
    }
    .img, .about-info {
        width: 80%; 
    }
    .portfolio-img {
        height: 350px; 
    }
    .about-info h1 {
        font-size: 30px;
    }
    .about-info span {
        font-size: 16px;
    }
}

/* Tablet devices */
@media screen and (max-width: 1024px) {
    .About {
        height: auto; 
        padding: 20px; 
    }
    .portfolio-img {
        height: 300px; 
    }
    .about-info h1 {
        font-size: 28px; 
    }
    .about-info span {
        font-size: 15px; 
    }
}

/* Mobile devices */
@media screen and (max-width: 768px) {
    .About {
        height: auto; 
        padding: 20px; 
    }
    .img, .about-info {
        width: 100%; 
        margin: 10px 0; 
    }
    .portfolio-img {
        height: 200px; 
    }
    .about-info h1 {
        font-size: 24px; 
    }
    .about-info span {
        font-size: 14px; 
    }
}

/* Smaller mobile devices */
@media screen and (max-width: 480px) {
    .portfolio-img {
        height: 150px; 
    }
    .about-info h1 {
        font-size: 20px; 
    }
    .about-info span {
        font-size: 12px; 
    }
    .button {
        font-size: 16px; 
    }
}
</style>
