
<template>
  <h1>This is Listing Product Page </h1>
  <div class="card">
    <div class="card-header">
      <h4>User
        <RouterLink to="/product/create" class="btn btn-success float-end">
          Add Product
        </RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Slug</th>
            <th>description</th>
            <th>Price</th>
            <th>Created_at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" v-bind:key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.slug }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.created_at }}</td>
            <td>
              <RouterLink :to="'/product/' + product.id + '/edit'" type="button" class="btn btn-primary">
                Edit
              </RouterLink>
              <button @click="DeleteProduct(product.id)" type="button" class="btn btn-danger">Delete</button>
            </td>

          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "product",
  data() {
    return {
      products: []
    }
  },
  methods: {
    async getProducts() {
      const res = await fetch("http://127.0.0.1:8000/api/products");
      const finalRes = await res.json();
      this.products = finalRes;
      console.log(this.product);
    },
    DeleteProduct(ProductId) {
      const token = localStorage.getItem('authToken');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };
      axios.delete(`http://127.0.0.1:8000/api/delete/products/${ProductId}`, config)
        .then(res => {
          console.log('Product Deleted successfully:', res.data);
          alert('Product Deleted Successfully');
          this.$router.push('/products');
        })
    },
  },
  mounted() {
    this.getProducts()
  }
}
</script>
