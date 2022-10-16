const state = {
    person: null,
    people: null
}

const getters = {
    person: () => state.person,
    people: () => state.people
}

const actions = {
    getPerson({commit, state, dispatch}, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            });
    },
    
    getPeople({commit}) {
        axios.get('/api/people')
            .then(res => {
                commit('setPeople', res.data.data)
            })
    },

    deletePerson({dispatch}, id) {
        axios.delete(`api/people/${id}`)
            .then(res => {
                dispatch('getPeople');
            })
    },

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
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    }
}

export default {state, mutations, actions, getters}
