<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Product</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input v-model="product.name" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Slug</label>
                    <input v-model="product.slug" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Description</label>
                    <input v-model="product.description" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Price</label>
                    <input v-model="product.price" type="number" class="form-control" />
                </div>

            </div>
            <div class="mb-3">
                <button @click="SaveProduct" type="button" class="btn btn-primary float-right">Save</button>
            </div>
        </div>

    </div>
</template>
<script>

import axios from "axios";
export default {
    name: 'createproduct',
    data() {
        return {
            product: {
                name: '',
                slug: '',
                description: '',
                price: '',
            },
        }
    },
    methods: {

        SaveProduct() {
            const token = localStorage.getItem('authToken');

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            };
            console.log('Product data to be sent:', this.product);
            axios.post('http://127.0.0.1:8000/api/create/products', this.product, config)
                .then(res => {
                    console.log('Product saved successfully:', res.data);
                    alert('Product Created Successfully');
                    this.$router.push('/products');

                })
                .catch(error => {
                    console.error('Error saving Product:', error.response.data);
                });
        },

    },
}

</script> 