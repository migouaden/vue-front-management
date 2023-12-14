<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Article</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Ttile</label>
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
                <button @click="updateArticle" type="button" class="btn btn-primary float-right">Save</button>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'editarticle',
    data() {
        return {
            articleId: null,
            article: {
                title: '',
                description: '',
                reference: '',
            },
        };
    },
    methods: {
        async GetArticleById(ArticleId) {
            try {
                this.articleId = this.$route.params.id;

                const response = await axios.get(`http://127.0.0.1:8000/api/articles/${ArticleId}`);
                this.article = response.data;
                console.log(this.article);
            } catch (error) {
                console.error('Error get article details:', error);
            }
        },
        async updateArticle() {

            try {
                const token = localStorage.getItem('authToken');

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                const response = await axios.post(`http://127.0.0.1:8000/api/update/article/${this.articleId}`, this.article, config);
                console.log('Article updated successfully:', response.data);
                alert('Article Updated Successfully');
                this.$router.push('/articles');
            } catch (error) {
                console.error('Error updating article:', error.response);
            }
        },
    },
    mounted() {
        this.GetArticleById(this.$route.params.id);
    },
};
</script>