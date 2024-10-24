<template>
  <section id="contact">
    <div class="Contact">
      <div class="contact-main"> 
        <h1>Contact</h1>  

        <div class="contact-info">
          <form @submit.prevent="Form">

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="fullname">Full Name *</legend>
                <input type="text" id="fullname" placeholder="fullname" v-model="contactinfo.fullname" required />
              </fieldset>
            </div>

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="username">Username (Email) *</legend>
                <input type="text" id="username" placeholder="Username" v-model="contactinfo.username" required />
              </fieldset>
            </div>

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="password">Password *</legend>
                <input type="password" id="password" placeholder="Password" v-model="contactinfo.password" required />
              </fieldset>
            </div>

            <div class="input-field">
              <fieldset class="fieldset">
                <legend class="confirmpassword">Confirm Password *</legend>
                <input type="password" id="confirmpassword" placeholder="Password" v-model="contactinfo.confirmpassword" required />
              </fieldset>
            </div>

            <button type="submit" class="login">Submit</button>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ContactPage',
  data() {
    return {
      contactinfo: {
        fullname: '',
        username: '',
        password: '',
        confirmpassword: ''
      }
    };
  },
  methods: {
    Form() {
      axios.post('http://localhost:8020/data', this.contactinfo)
        .then(response => {
          console.log('Contact details data saved:', response.data);
          this.contactinfo = {
            fullname: '',
            username: '',
            password: '',
            confirmpassword: ''
          };
        })
        .catch(error => {
          console.error('Error saving contact details data:', error);
        });
    }
  }
}
</script> 

<style scoped>
.Contact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; 
  background-color: #1b1b1b;
  margin: 0;
  padding: 20px; 
}

.contact-main {
  width: 90%; 
  max-width: 500px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  padding: 20px; 
  border-radius: 5px;
}

.contact-main h1 {
  text-align: center;
  font-size: 33px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(to right, #6cff52, #3ec5ff);
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 20px; 
}

.contact-info {
  /* border: 1px solid red;  */
  padding: 20px; 
}

.fieldset {
  width: 100%; 
  margin: 10px 0; 
  border-radius: 5px;
}

.input-field input {
  width: 100%;
  height: 40px; 
  border: none;
  outline: none;
  background-color: #1b1b1b;
  font-size: 18px;
  font-weight: bold;
  color: #c9c6c6;
}

.input-field input::placeholder {
  color: #c9c6c6;
}

.username,
.password,
.fullname,
.confirmpassword {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #c9c6c6;
}

.login {
  font-size: 19px;
  margin-top: 20px; 
  width: 100%; 
  height: 45px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #00a025;
  color: white;
}

/* Tablet View */
@media screen and (max-width: 1024px) {
  .contact-main {
    width: 80%; 
  }

  .contact-main h1 {
    font-size: 30px; 
  }

  .input-field input {
    font-size: 16px; 
  }
}

/* Mobile View */
@media screen and (max-width: 768px) {
  .contact-main {
    width: 95%; 
  }

  .contact-main h1 {
    font-size: 25px; 
  }

  .input-field input {
    font-size: 16px; 
  }
}

/* Small Mobile View */
@media screen and (max-width: 480px) {
  .contact-main {
    width: 100%; 
  }

  .contact-main h1 {
    font-size: 20px; 
  }

  .input-field input {
    font-size: 14px; 
  }

  .login {
    height: 40px; 
  }
}
</style>
