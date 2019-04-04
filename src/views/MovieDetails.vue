<template>
    <div class="pt-4 pb-3">
        <h3>Movie Details</h3>
        <div class="card" style="width: 50%;">
            <div class="card-body">
                <h5 class="card-title">{{movie.title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{movie.rating}}</h6>
                <p class="card-text">Length: {{ movie.length }}</p>
                <p class="card-text">Length: {{ movie.description }}</p>
                <p class="card-text">Last Update: {{ movie.updated_at }}</p>
            </div>
        </div>

    </div>
</template>
<script>

  function Movie ({ id, title, rating, length, description}) {
  this.id = parseInt(id)
  this.title = title
  this.rating = rating
  this.length = length
  this.description = description
  }

  export default {
    data () {
      return {
        id: null,
        movie: Object
      }
    },
    methods: {
      read () {
        let url = 'https://usernameistaken.com/api/movies/' + this.id
        window.axios.get(url).then(({ data }) => {
          this.movie = data;
        })
      }
    },
    computed: {

    },
    components: {

    },
    created () {
      this.id = this.$route.params.userId
      this.read()
    }
  }
</script>

<style>
    .card {
        margin: auto;
    }
    .card-body {
        text-align: left;
    }
</style>
