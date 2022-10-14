const state = {
    person: null
}

const actions = {
    getPerson() {
        axios.get(`/api/people/${this.$route.params.id}`)
            .then(res => {
                this.person = res.data.data
            });
    },
}
