<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Login</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input v-model="email" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" class="form-control" />
                </div>
            </div>
            <div class="mb-3">
                <button @click="login" type="button" class="btn btn-primary float-right">Login</button>
            </div>
        </div>

    </div>
</template>
   

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            const data = {
                email: this.email,
                password: this.password,
            };
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const response = await axios.post('http://127.0.0.1:8000/api/login', data, config)
            const user = response.data.user;
            const token = response.data.token;

            localStorage.setItem('authUser', JSON.stringify(user));
            localStorage.setItem('authToken', token);

            this.$router.push('/');
        },
    },
};
</script>
