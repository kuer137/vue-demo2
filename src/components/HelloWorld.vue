<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>vux 组件</h2>
    <p>
      <router-link to="/checklist">Checklist</router-link>
      <br>
      <router-link to="/confirm">confirm</router-link>
      <br>
      <router-link to="/form">form</router-link>
      <br>
      <router-link to="/swiper">swiper</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
