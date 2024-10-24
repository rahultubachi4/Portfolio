<template>
    <section id="services">
        <div class="Service">
            <div class="project">
                <h1>Services</h1>
                <div class="img">
                    <img src="@/assets/project.png" alt="Portfolio Image" class="project-img">
                </div>
                <h2 class="info">
                    This project contains a login interface for a web application. On the right side of the screen is a login <br> 
                    form where users can toggle between two options: Employer and Freelancer. The form requires <br> 
                    a Username (Email) and a Password, with additional options like "Remember Me" and "Forgot <br> 
                    Password?". There's also a Register link for new users to sign up. This interface could be part of a <br> 
                    freelancing or job platform where employers can post jobs and freelancers can search for and apply to them.
                </h2>
            </div>   
        </div>
    </section>
</template>

<script>
export default {
    name: 'ServicePage'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.Service {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: #1b1b1b;
    margin: 0;
    padding: 20px; 
}

.project {
    height: auto; 
    width: 80%;
    max-width: 1600px; 
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
}

.project h1 {
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(to right, #6cff52, #3ec5ff);
    -webkit-background-clip: text;
    background-clip: text;
    box-shadow: 0px 4px 3px rgb(99, 99, 99);
    margin: 40px 20px; 
}

.img {
    display: flex;
    justify-content: center;
    align-items: center;
}

.project-img {
    height: auto;
    width: 100%; 
    max-height: 600px; 
    margin-top: 20px;
    box-shadow: 0px 4px 3px rgb(99, 99, 99);
}

.info {
    text-align: center;
    font-size: 20px;
    color: white;
    font-weight: bold;
    line-height: 33px;
    margin: 20px; 
}

/* Tablet View */
@media screen and (max-width: 1024px) {
    .project {
        width: 90%; 
    }

    .project-img {
        max-height: 450px; 
    }

    .info {
        font-size: 18px;
        line-height: 30px;
    }

    .project h1 {
        font-size: 30px;
    }
}

/* Mobile View */
@media screen and (max-width: 768px) {
    .project {
        width: 95%;
    }

    .project-img {
        max-height: 350px; 
    }

    .info {
        font-size: 16px;
        line-height: 28px;
        padding: 0 10px; 
    }

    .project h1 {
        font-size: 25px;
        margin: 20px 10px; 
    }
}

/* Small Mobile View */
@media screen and (max-width: 480px) {
    .project {
        width: 100%;
    }

    .project-img {
        max-height: 250px; 
    }

    .info {
        font-size: 14px;
        line-height: 24px;
        padding: 0 5px;
    }

    .project h1 {
        font-size: 20px;
        margin: 10px; 
    }
}
</style>
