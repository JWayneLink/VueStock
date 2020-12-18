<template>
  <div id="home" class="home">
    <ul>
      <li>
        <img src="../assets/logo.png">
        {{parentNode}}
      </li>
      <ul>
        <li v-for="item in skills" :key="item.skill">
          {{item.skill}}
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  // import VueButton from '../components/Button'

  Vue.use(VueRouter)


  export default {
    name: 'Home',
    data() {
      return {
        parentNode: 'Vue Learning',
        skills: [{
            skill: 'npm install vue-router'
          },
          {
            skill: 'npm install vue bootstrap-vue bootstrap'
          },
          {
            skill: 'npm install vue-i18n'
          },
          {
            skill: 'npm install --save axios vue-axios'
          },
          {
            skill: 'npm install vuex --save'
          }
        ]
      }
    },
    components: {
      // 'HelloWorld': HelloWorld,
      // 'VueButton': VueButton,
    }
  }
</script>

<style scoped>
  .home ul {
    display: inline-block;
    text-align: left;
  }

  img {
    width: 50px;
    height: 50px;
  }
</style>