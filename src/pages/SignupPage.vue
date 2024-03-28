<template>
  <div class="main">
    <div><h1>Sign up</h1></div>
    <div class="form_div">
      <Form :validation-schema="schema" @submit="handleSubmit" class="form">
        <div class="label_div">
        <label for="name">Enter your name</label>
        <Field name="name" id="name" class="input" placeholder=" Name" />
        <ErrorMessage name="name" class="error" />
        </div>
        <div>
         <label for="email">Enter your email</label>
        <Field
          name="email"
          id="email"
          type="email"
          class="input"
          placeholder="Email"
        />
        <ErrorMessage name="email" class="error" />
        </div>
        <div>
        <label for="password">Enter your password</label>
        <Field
          name="password"
          type="password"
          id="password"
          class="input"
          placeholder="Password"
        />
        <ErrorMessage name="password" class="error" />
        </div>
        <div class="btn_div">
          <v-btn
            class="submit_btn"
            variant="outlined"
            elevated
            type="submit"
            style="
              background-color: #008cba;
              border: none;
              color: white;
              font-weight: bold;
              width: 100%;
            "
          >
            Submit
            <div class="loader">
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="white"
              ></v-progress-circular>
            </div>
          </v-btn>
        </div>
      </Form>
      <div class="link_div">Already registered<router-link to="/">Log in</router-link></div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default {
  name: "SignupPage",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
        loading:false,
      schema: yup.object({
        email: yup.string().email().required(),
        name: yup.string().required(),
        password:yup.string().required().min(6),
      }),
    };
  },
  methods:{
   async handleSubmit(values){
      try{
        this.loading=true;
      await createUserWithEmailAndPassword(auth,values.email,values.password);
        this.$router.push("/")
      }catch(e){
        console.warn(e);
      }finally{
        this.loading=false;
      }
    }
  }
};
</script>

<style scoped>
.main {
  height: 100vh;
  background: #cbdff0;
   background: #dde5ed;
}
h1 {
  text-align: center;
  padding-top: 20px;
}
.form_div {
  width: 45%;
  margin: auto;
  background: #fff;
  padding:40px 20px;
  border-radius: 10px;
}
.form {
  width: 100%;
}
.btn_div{
    width: 100%;
    position: relative;
}
label{
    font-weight: 500;
}
.input {
  width: 100%;
  border: 1.5px solid rgb(206, 203, 203);
  margin-bottom: 10px;
  height: 40px;
  padding: 0px 10px;
}
.error {
  color: red;
  font-style: italic;
  font-size: 13px;
  margin-bottom: 10px;
}
.loader{
    position: absolute;
}
.link_div{
    display: flex;
    justify-content: flex-end;
    gap:10px;
    margin-top: 10px;
}

</style>