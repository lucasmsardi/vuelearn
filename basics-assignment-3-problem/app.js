const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            result: 'Not there yet!',
            resetTimeoutSet: false 
        };
    },
    methods: {
        addOne() {
            this.counter += 1;
        },
        addFive() {
            this.counter += 5;
        },
        resetCounter() {
            this.counter = 0;
            this.result = 'Not there yet!';
            this.resetTimeoutSet = false;
        }
    },
    watch: {
        counter(value) {
            if (value === 37) {
                this.result = 'You did it!';
            } else if (value > 37) {
                this.result = 'Too much!';
            } else {
                this.result = 'Not there yet!';
            }

            if (!this.resetTimeoutSet) {
                this.resetTimeoutSet = true;
                setTimeout(() => {
                    this.resetCounter();
                }, 5000);
            }
        }
    }
});

app.mount("#assignment");
