const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  computed: {
    fullname() {
         if (this.name === '') {
            return '';
         }
         return this.name + ' ' + 'Sardi';
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    submitForm() {
      alert('Submitted!');
    }
    
  }
});

app.mount('#events');
