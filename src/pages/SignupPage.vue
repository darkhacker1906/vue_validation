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
        <div class="btn"><button>Submit</button></div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "SignupPage",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      schema: yup.object({
        email: yup.string().email().required(),
        name: yup.string().required(),
        password:yup.string().required().min(6),
      }),
    };
  },
  methods:{
    handleSubmit(values){
        console.log(values);
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
  padding:20px;
  border-radius: 10px;
}
.form {
  width: 100%;
}
.btn {
  display: flex;
  justify-content: center;
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
.btn {
  background: rgb(136, 187, 231);
  padding: 8px;
  border-radius: 3px;
}
.error {
  color: red;
  font-style: italic;
  font-size: 13px;
  margin-bottom: 10px;
}

</style>