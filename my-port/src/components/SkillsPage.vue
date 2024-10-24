<template>
    <section id="skills">
        <div class="Skills">
            <div class="Skills-info">
                <h1>MY SKILLS</h1>

                <div class="skill">
                    <span>HTML</span>
                    <div class="progress-html">
                        <div class="progress-bar-html">88%</div>
                    </div>
                </div>

                <div class="skill">
                    <span>CSS</span>
                    <div class="progress-css">
                        <div class="progress-bar-css">80%</div>
                    </div>
                </div>

                <div class="skill">
                    <span>JAVA SCRIPT</span>
                    <div class="progress-javascript">
                        <div class="progress-bar-javascript">70%</div>
                    </div>
                </div>

                <div class="skill">
                    <span>SQL</span>
                    <div class="progress-sql">
                        <div class="progress-bar-sql">65%</div>
                    </div>
                </div>

                <div class="skill">
                    <span>Vue JS</span>
                    <div class="progress-vuejs">
                        <div class="progress-bar-vuejs">60%</div>
                    </div>
                </div>
           
                <div class="skill">
                    <span>Java</span>
                    <div class="progress-java">
                        <div class="progress-bar-java">86%</div>
                    </div>
                </div>

                <div class="skill">
                    <span>PYTHON</span>
                    <div class="progress-python">
                        <div class="progress-bar-python">70%</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SkillsPage'
}
</script>

<style scoped>
.Skills {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 860px;
    background-color: #1b1b1b;
    margin: -30px 0;
}

.Skills-info {
    height: auto; 
    width: 80%;
    color: white;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
    padding: 20px; 
    margin-top: 90px;
}

.Skills-info h1 {
    font-size: 33px;
    text-align: center;
    color: transparent;
    background: linear-gradient(to right, #38f916, #2abffe); 
    -webkit-background-clip: text; 
    background-clip: text; 
    box-shadow: 0px 4px 3px rgb(99, 99, 99); 
    margin: 20px 0;
}

.skill {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin: 15px 0; 
}

.skill span {
    font-size: 20px;
    font-weight: bold;
}

.progress-html, .progress-css, .progress-javascript, .progress-sql, .progress-vuejs, .progress-java, .progress-python {
    background-color: #444;
    border-radius: 11px;
    height: 23px;
    box-shadow: 0px 4px 3px rgb(68, 68, 68);
    flex: 1; 
    margin-left: 20px;
}

/* Progress Bar Base Styles */
.progress-bar-html,
.progress-bar-css,
.progress-bar-javascript,
.progress-bar-sql,
.progress-bar-vuejs,
.progress-bar-java,
.progress-bar-python {
    display: flex;
    justify-content: end;
    font-size: 16px;
    background-color: #000000;
    color: white;
    font-weight: bold;
    padding-right: 5px; 
}

/* Progress Bar Widths */
.progress-bar-html { width: 88%; }
.progress-bar-css { width: 80%; }
.progress-bar-javascript { width: 70%; }
.progress-bar-sql { width: 65%; }
.progress-bar-vuejs { width: 60%; }
.progress-bar-java { width: 86%; }
.progress-bar-python { width: 70%; }

/* Laptop (max-width: 1440px) */
@media screen and (max-width: 1440px) {
    .Skills-info h1 {
        font-size: 30px;
    }

    .skill span {
        font-size: 18px;
    }

    .progress-html, .progress-css, .progress-javascript, .progress-sql, .progress-vuejs, .progress-java, .progress-python {
        height: 22px; 
    }
}

/* Tablets (max-width: 992px) */
@media screen and (max-width: 992px) {
    .Skills-info h1 {
        font-size: 28px;
    }

    .skill span {
        font-size: 18px;
    }

    .progress-html, .progress-css, .progress-javascript, .progress-sql, .progress-vuejs, .progress-java, .progress-python {
        height: 20px; 
    }

    .progress-bar-html { width: 80%; }
    .progress-bar-css { width: 75%; }
    .progress-bar-javascript { width: 70%; }
    .progress-bar-sql { width: 70%; }
    .progress-bar-vuejs { width: 65%; }
    .progress-bar-java { width: 85%; }
    .progress-bar-python { width: 75%; }
}

/* Small Tablets/Mobile Landscape (576px to 767px) */
@media screen and (max-width: 767px) {
    .Skills-info h1 {
        font-size: 26px;
    }

    .skill span {
        font-size: 16px;
    }

    .progress-html, .progress-css, .progress-javascript, .progress-sql, .progress-vuejs, .progress-java, .progress-python {
        height: 18px; 
    }

    .progress-bar-html { width: 70%; }
    .progress-bar-css { width: 65%; }
    .progress-bar-javascript { width: 60%; }
    .progress-bar-sql { width: 60%; }
    .progress-bar-vuejs { width: 55%; }
    .progress-bar-java { width: 75%; }
    .progress-bar-python { width: 65%; }
}

/* Mobile (up to 575px) */
@media screen and (max-width: 575px) {
    .Skills-info {
        width: 95%; /* Ensure it uses more width on smaller screens */
    }

    .Skills-info h1 {
        font-size: 24px;
    }

    .skill {
        flex-direction: column;
        align-items: flex-start; 
    }

    .skill span {
        margin-bottom: 5px; 
    }

    .progress-html, .progress-css, .progress-javascript, .progress-sql, .progress-vuejs, .progress-java, .progress-python {
        width: 100%; 
    }

    .progress-bar-html { width: 90%; }
    .progress-bar-css { width: 85%; }
    .progress-bar-javascript { width: 80%; }
    .progress-bar-sql { width: 80%; }
    .progress-bar-vuejs { width: 75%; }
    .progress-bar-java { width: 90%; }
    .progress-bar-python { width: 80%; }
}
</style>
