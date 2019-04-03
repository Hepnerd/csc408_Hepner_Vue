<template>
    <div class="pt-4 pb-3">
        <h3>Movie Details</h3>
        <div class="card" style="width: 50%;">
            <div class="card-body">
                <h5 class="card-title">{{this.title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{this.rating}}</h6>
                <p class="card-text">Length: {{ this.length }}</p>
                <p class="card-text">Last Update: {{ this.updated_at }}</p>
            </div>
        </div>

    </div>
</template>
<script>

  function Movie ({ id, title, rating, length, description, onDVD, onBluRay, deleted_at, created_at, updated_at }) {
  this.id = parseInt(id)
  this.title = title
  this.rating = rating
  this.length = length
  this.description = description
  this.onDVD = onDVD
  this.onBluRay = onBluRay
  this.deleted_at = deleted_at
  this.created_at = created_at
  this.updated_at = updated_at
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
      /* using the isAdmin, return a text role
      role: function () {
            return this.movie.isAdmin ? 'Administrator' : 'Movie';
      },
       MAke a pretty date for showing last_update
      updated: function(){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        var today  = new Date(this.movie.updated_at);
        return today.toLocaleString("en-US", options);
      }*/
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
