<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Product</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Title</label>
                    <input v-model="article.title" type="text" class="form-control" />
                </div>

                <div class="mb-3">
                    <label for="">Description</label>
                    <input v-model="article.description" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Reference</label>
                    <input v-model="article.reference" type="text" class="form-control" />
                </div>

            </div>
            <div class="mb-3">
                <button @click="SaveArticle" type="button" class="btn btn-primary float-right">Save</button>
            </div>
        </div>

    </div>
</template>
<script>

import axios from "axios";
export default {
    name: 'createarticle',
    data() {
        return {
            article: {
                title: '',
                description: '',
                reference: '',
            },
        }
    },
    methods: {

        SaveArticle() {
            const token = localStorage.getItem('authToken');

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            };
            console.log('Article data to be sent:', this.product);
            axios.post('http://127.0.0.1:8000/api/create/article', this.article, config)
                .then(res => {
                    console.log('Article saved successfully:', res.data);
                    alert('Article Created Successfully');
                    this.$router.push('/articles');

                })
                .catch(error => {
                    console.error('Error saving Article:', error.response.data);
                });
        },

    },
}

</script> 