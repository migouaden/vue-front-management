<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add User</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input v-model="user.name" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input v-model="user.email" type="email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Password</label>
                    <input v-model="user.password" type="password" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Confirm Password</label>
                    <input v-model="user.password_confirmation" type="password" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Role</label>
                    <select v-model="user.role" required class="form-select" aria-label="Default select example">
                        <option selected>Select Role </option>
                        <option v-for="role in roles" :key="role.id" :value="role.name">
                            {{ role.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="mb-3">
                <button @click="saveUser" type="button" class="btn btn-primary float-right">Save</button>
            </div>
        </div>

    </div>
</template>
<script>

import axios from "axios";
export default {
    name: 'createuser',
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                role: ''
            },
            roles: []

        }

    },
    methods: {

        saveUser() {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            console.log('User data to be sent:', this.user);
            axios.post('http://127.0.0.1:8000/api/register', this.user, config)
                .then(res => {
                    console.log('User saved successfully:', res.data);
                    //store the token in locale 
                    const token = res.data.token;
                    localStorage.setItem('authToken', token);
                    alert('User Created Succufuly');
                    this.$router.push('/');

                })
                .catch(error => {
                    console.error('Error saving user:', error.response.data);
                });

        },
        async getRoles() {
            const res = await fetch("http://127.0.0.1:8000/api/roles");
            const finalRes = await res.json();
            this.roles = finalRes;
            console.log(this.role);
        },
    },
    mounted() {
        this.getRoles();
    }
}

</script> 