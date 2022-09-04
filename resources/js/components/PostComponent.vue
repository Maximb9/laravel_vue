<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>Name: {{ name }}</div>
        <button @click="sayHi">Hi</button>
        <button @click="getNumberSale">22</button>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostComponent",

    data() {
      return {
          age: 32,
          name: 'Alex',
      }
    },

    methods: {
        sayHi() {
            console.log('Hi')
        },

        getNumberSale() {
            console.log(22)
        }
    },

    components: {SinglePostComponent},
}
</script>

<style scoped>

</style>
