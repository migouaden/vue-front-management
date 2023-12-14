<template>
    <h1>This is Listing User Page </h1>
    <div class="card">
        <div class="card-header">
            <h4>User
                <RouterLink to="/create/user" class="btn btn-success float-end">
                    Add User
                </RouterLink>
            </h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created_at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" v-bind:key="user.id">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                            <span v-for="(role, index) in user.roles" :key="index">
                                {{ role.name }}
                                <span v-if="index < user.roles.length - 1">, </span>
                            </span>
                        </td>
                        <td>{{ user.created_at }}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "user",
    data() {
        return {
            users: []
        }
    },
    methods: {
        async getUsers() {
            const res = await fetch("http://127.0.0.1:8000/api/users");
            const finalRes = await res.json();
            this.users = finalRes;
            console.log(this.user);
        }
    },
    mounted() {
        this.getUsers()
    }
}
</script>