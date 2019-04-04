<template>
    <div class="about pt-4 pb-3">
        <h1>Yellow Box Rentals</h1>

        <table class="table table-striped">
            <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Rented</th>
            <th>Returned</th>
            </tr>
            </thead>
            <tbody>
            <MovieRentalComponent
                    v-for="(movie, index) in movies"
                    v-bind="movie"
                    :index="index"
                    :key="movie.id"
            ></MovieRentalComponent>
            </tbody>
        </table>
    </div>
</template>
<script>

  function Movie ({ id, name, email, pivot }) {
    this.id = parseInt(id)
    this.name = name
    this.email = email
    this.transaction = pivot
  }

  /* Go get the code for the rental-component tag that is in the template */
  import MovieRentalComponent from '@/components/MovieRentalComponent.vue'

  export default {
    data () {
      return {
        movies: []
      }
    },
    methods: {
      read () {
        this.movies = []
        window.axios.get('https://usernameistaken.com/api/movies/' + this.id + '/rentals')        .then(({ data }) => {
          data[0].rentals.forEach(movie => {
                this.movies.push(new Movie(movie))
            })
        })
      },
      view (id) {
      },
      rentals (id) {
      }
    },
    components: {
      MovieRentalComponent
    },
    created () {
    this.id = this.$route.params.userId
      this.read()
    }
  }
</script>

<style>

</style>
