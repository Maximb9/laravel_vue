<template>
    <div class="w-25" v-if="person">
        <div class="mb-3">
            <input type="text" v-model="person.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="person.age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="person.job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="update" type="submit" value="update" class="btn btn-primary">
        </div>
    </div>
</template>

<script>

export default {
    name: "Edit",

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id);
    },

    methods: {
        update() {
            axios.patch(`/api/people/${this.$route.params.id}`, {
                name: this.name,
                age: this.age,
                job: this.job
            })
                .then(res => {
                    this.$router.push({name: 'person.show', params: {id: this.$route.params.id}})
                })
        }
    },

    computed: {
        isDisabled() {
            return this.name && this.age && this.job
        },

        person() {
            return this.$store.getters.person
        }
    }
}
</script>

<style scoped>

</style>
