<template>
    <tr>
        <td>{{ title }}</td>
        <td>{{ rating }}</td>
        <td>{{ length }}</td>
        <!--<td>{{ description }}</td>
        <td>{{ onDVD }}</td>
        <td>{{ onBluRay }}</td>
        <td>{{ deleted_at }}</td>
        <td>{{ created_at }}</td>
        <td>{{ updated_at }}</td>-->
        <td>
            <div class="btn btn-sm btn-success"><router-link :to="'/movie-details/' + this.id">View</router-link></div>
            <div class="btn btn-sm btn-dark"><router-link :to="'/movie-details/' + this.id + '/rentals'">Rentals</router-link></div>
        </td>
    </tr>
</template>

<script>
export default {
    data () {
      return {}
    },
    methods: {
      view () {
        // this.$emit('view', this.id);
        console.log('Component Viewing id:' + this.id)

        // this.$router.push({ name: 'movie-details', params: { id: 3 } })
        let movieRoute = '/movie-details/3';
        this.$router.push(movieRoute);
      },
      rentals () {
        this.$emit('rentals', this.id);
      }
    },
    props: [ 'id', 'title', 'rating', 'length', 'description', 'onDVD', 'onBluRay', 'deleted_at', 'created_at', 'updated_at' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
