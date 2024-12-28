const app = Vue.createApp({
    data() {
        return {
            input: ''
        }
    },
    computed: {
        fullname() {
             if (this.name === '') {
                return '';
             }
             return this.name + ' ' + 'Sardi';
        }
    },
    methods: {
        showAlert() {
            alert("This is an ALERT!")
        },
        setInput(event) {
            this.input = event.target.value;
        }
    }
})

app.mount('#assignment')