<template>
<div class="main_div">
 <h1>Login</h1>
 <div class="form_div">
     <Form @submit="onSubmit">
      <label for="email">Enter your email</label>
      <Field name="email" id="email" type="email" :rules="validateEmail" placeholder="Enter your email" />
      <Field name="password" type="password" :rules="validatePassword" placeholder="Enter your password"/>
       <ErrorMessage class="error" name="email" />
    <div>  <button>Submit</button></div>
    </Form>
    <div class="link_div">Go to<router-link to="/signup">Sign up</router-link></div>
 </div>
 </div>
</template>

<script>
import { Form, Field,ErrorMessage } from 'vee-validate';
export default {
name:"LoginPage",
components: {
    Form,
    Field,
    ErrorMessage
  },
data() {
  return {
    name: "" 
  }
},
methods: {
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
    },
    validateEmail(value) {
      if (!value) {
        return 'This field is required';
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      return true;
    },
    validatePassword(value){
      if(!value){
        return "This field is required"
      }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(regex.test(value)){
      return "Enter valid password"
    }
    return true
    }
  },
}

</script>

<style scoped>
.main_div{
    margin: 0;
    padding:"10px";
    height: 100vh;
    width: 100vw;
    background: rgb(203, 223, 240);
}
h1{
    text-align: center;
}
.form_div{
    width:"40%";
    margin: auto;
}
form{
    width: 40%;
    margin: auto;
}
input{
    width: 100%;
    border:2px solid grey;
    margin-bottom: 10px;
    height: 40px;
    padding: 0px 10px;
}
button{
      background: rgb(136, 187, 231);
      padding: 8px;
      border-radius: 3px;
}
.error{
  color:red;
  font-style: italic;
  font-size: 13px;
  margin-bottom: 10px;
}
.link_div{
  display: flex;
 justify-content: center;
 gap:10px
}
</style>