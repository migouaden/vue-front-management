
<template>
  <h1>This is Listing Article Page </h1>
  <div class="card">
    <div class="card-header">
      <h4>User
        <RouterLink to="/article/create" class="btn btn-success float-end">
          Add Article
        </RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>description</th>
            <th>Reference</th>
            <th>Created_at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" v-bind:key="article.id">
            <td>{{ article.title }}</td>
            <td>{{ article.description }}</td>
            <td>{{ article.reference }}</td>
            <td>{{ article.created_at }}</td>
            <td>
              <RouterLink :to="'/article/' + article.id + '/edit'" type="button" class="btn btn-primary">
                Edit
              </RouterLink>
              <button @click="DeleteArticle(article.id)" type="button" class="btn btn-danger">Delete</button>
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
  name: "article",
  data() {
    return {
      articles: []
    }
  },
  methods: {
    async getArticles() {
      const res = await fetch("http://127.0.0.1:8000/api/articles");
      const finalRes = await res.json();
      this.articles = finalRes;
      console.log(this.article);
    },
    DeleteArticle(ArticleId) {
      const token = localStorage.getItem('authToken');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };
      axios.delete(`http://127.0.0.1:8000/api/delete/article/${ArticleId}`, config)
        .then(res => {
          console.log('Article Deleted successfully:', res.data);
          alert('Article Deleted Successfully');
          this.$router.push('/articles');
        })
    },
  },
  mounted() {
    this.getArticles()
  }
}
</script>
