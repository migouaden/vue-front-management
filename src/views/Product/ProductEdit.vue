<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Product</h4>
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
                <button @click="updateProduct" type="button" class="btn btn-primary float-right">Save</button>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'editproduct',
    data() {
        return {
            productId: null,
            product: {
                name: '',
                slug: '',
                description: '',
                price: 0,
            },
        };
    },
    methods: {
        async GetProductById(ProductId) {
            try {
                this.productId = this.$route.params.id;

                const response = await axios.get(`http://127.0.0.1:8000/api/products/${ProductId}`);
                this.product = response.data;
                console.log(this.product);
            } catch (error) {
                console.error('Error get product details:', error);
            }
        },
        async updateProduct() {

            try {
                const token = localStorage.getItem('authToken');

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                const response = await axios.post(`http://127.0.0.1:8000/api/update/products/${this.productId}`, this.product, config);
                console.log('Product updated successfully:', response.data);
                alert('Product Updated Successfully');
                this.$router.push('/products');
            } catch (error) {
                console.error('Error updating product:', error.response);
            }
        },
    },
    mounted() {
        this.GetProductById(this.$route.params.id);
        // console.log(this.$route.params.id);
    },
};
</script>