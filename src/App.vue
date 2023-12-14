<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <RouterLink to="/login" class="btn btn-info">Login</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link " to="/">Users</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link " to="/products">Products</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link " to="/articles">Articles</RouterLink>
            </li>
            <button @click="logout" type="button" class="btn btn-secondary">Logout</button>
          </ul>

        </div>
      </div>
    </nav>
  </div>

  <RouterView />
</template>
<script>
import axios from "axios";
export default {
  methods: {
    logout() {
      const token = localStorage.getItem('authToken');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };

      axios.post('http://127.0.0.1:8000/api/logout', {}, config)
        .then(res => {

          localStorage.removeItem('authToken');
          alert('Logout');
        })
      this.$router.push('/');
    },
  },
};
</script>

