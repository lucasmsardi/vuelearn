const app = Vue.createApp({
    data() {
        return {
            name: 'Lucas',
            age: 31,
        }
    },
    methods: {
        outputAgeIn5() {
            return this.age + 5;
        },
        favoriteNumber() {
            return Math.random();
        }
    }
})

app.mount('#assignment');