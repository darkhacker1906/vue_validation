<template>
  <div class="main_div">
    <h1>Login</h1>
    <div class="form_div">
      <Form :validation-schema="schema" @submit="onSubmit">
        <div>
          <label for="email">Enter your email</label>
          <Field
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
          <ErrorMessage class="error" name="email" />
        </div>
        <div>
          <label for="password">Enter your email</label>
          <Field
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <ErrorMessage class="error" name="password" />
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
      <div class="link_div">
        Not registered<router-link to="/signup">Sign up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginPage",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      loading: false,
      schema: yup.object({
        email: yup.string().email().required(),
        password: yup.string().required().min(6),
      }),
    };
  },
  created(){
    
  },
  methods: {
    async onSubmit(values) {
      try {
        this.loading = true;
        await signInWithEmailAndPassword(auth, values.email, values.password);
        this.$router.push("/home");
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.main_div {
  margin: 0;
  padding: "10px";
  height: 100vh;
  background: rgb(203, 223, 240);
}
h1 {
  text-align: center;
}

.form_div {
  width: 45%;
  margin: auto;
  background: #fff;
  padding: 40px 20px;
  border-radius: 15px;
}

input {
  width: 100%;
  border: 2px solid grey;
  margin-bottom: 10px;
  height: 40px;
  padding: 0px 10px;
}
button {
  background: rgb(136, 187, 231);
  padding: 8px;
  border-radius: 3px;
  width: 100%;
}
.btn_div {
  position: relative;
}
.loader {
  position: absolute;
}
.btn {
  width: 100%;
}
.error {
  color: red;
  font-style: italic;
  font-size: 13px;
  margin-bottom: 10px;
}
.link_div {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}
</style>