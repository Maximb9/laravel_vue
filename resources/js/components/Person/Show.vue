<template>
    <div v-if="person">
        <div>
            name: {{ person.name }}
        </div>
        <div>
            age: {{ person.age }}
        </div>
        <div>
            job: {{ person.job }}
        </div>
        <router-link :to="{ name: 'person.edit', params: { id: person.id} }">Edit</router-link>

    </div>
</template>

<script>
export default {
    name: "Show",

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
        person() {
            return this.$store.getters.person
        }
    }
}
</script>

<style scoped>

</style>
