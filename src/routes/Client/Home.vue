<template>
  <div id="visa">
    <h1>Create a New Vue Account</h1>
    <form>
      <label for="full name">Full Name:</label>
      <input type="text" v-model="name" required />
      <label for="email">Email Address:</label>
      <input type="text" v-model="email" required />
      <span v-if="msg.email">{{msg.email}}</span>
      <label for="password">Password:</label>
      <input type="text" v-model="password" required />
      <span v-if="msg.password">{{msg.password}}</span>
      <label for="twitter">Twitter Handle:</label>
      <input type="text" v-model="twitter" required />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data(){
    return {
      name: '',
      password: '',
      email: '',
      msg: [],
      twitter: ''
    }
  },
  watch: {
    email(value){
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    }
  },
  methods:{
    validateEmail(value){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
  {
    this.msg['email'] = '';
  } else{
    this.msg['email'] = '이메일 ';
  } 
    }
  }
}
</script>