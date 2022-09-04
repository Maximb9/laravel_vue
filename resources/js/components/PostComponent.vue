<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>Name: {{ name }}</div>
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

    components: {SinglePostComponent},
}
</script>

<style scoped>

</style>
