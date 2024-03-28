<template>
  <div class="main_div">
    <div class="logout_div">
      <v-btn color="primary" @click="handleClick">Logout</v-btn>
    </div>
    <h1>Homepage</h1>
    <div class="m_div">
    <div>
    <input type="text" v-model="todo_text"/>
   </div>
   </div>
  </div>
</template>

<script>
import { auth, signOut} from "@/firebase";
export default {
  name: "HomePage",
  data(){
    return{
        todo_text:""
    }
  },
  methods: {
    async handleClick() {
      try {
        await signOut(auth);
        this.$router.push("/");
      } catch (e) {
        console.warn(e);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.main_div {
  margin: 0;
  padding: "10px";
  height: 100vh;
  background: rgb(203, 223, 240);
}
.logout_div {
  display: flex;
  justify-content: end;
  padding: 10px;
}
input{
    border:1.5px solid rgb(158, 158, 159);
    height:30px
}
.m_div{
    width: 45%;
    margin: auto;
}
</style>