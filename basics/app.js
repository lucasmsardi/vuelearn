const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Learn Vue and build awesome projects!',
            courseGoalB: 'Master Vue!', 
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
