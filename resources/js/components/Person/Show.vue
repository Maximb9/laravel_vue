<template>
    <div v-if="person">
        <div>
            name: {{ this.person.name }}
        </div>
        <div>
            age: {{ this.person.age }}
        </div>
        <div>
            job: {{ this.person.job }}
        </div>
        <router-link :to="{ name: 'person.edit', params: { id: this.person.id} }">Edit</router-link>

    </div>
</template>

<script>
export default {
    name: "Show",

    data() {
        return {
            person: null
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get('/api/people/' + this.$route.params.id)
                .then(res => {
                    this.person = res.data
                });
        },
    }
}
</script>

<style scoped>

</style>
