<template>
    <tr>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>{{ transaction.disc_type}}</td>
    <td>{{ this.rented }}</td>
    <td>{{ this.returned }}</td>
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

        // this.$router.push({ name: 'customer-details', params: { id: 3 } })
        let myRoute = '/customer-details/3';
        this.$router.push(myRoute);
      },
      rentals () {
        this.$emit('rentals', this.id);
      }
    },
    computed: {
        /* Build URL for image */
        /*imageUrl: function(){
          return   "http://codeflare.tech/images/movie_" + this.transaction.movie_id + ".jpg";
        },*/
        /* MAke a pretty date for showing last_update */
        rented: function(){
            var options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            var day  = new Date(this.transaction.rent_date);
            return day.toLocaleString("en-US", options);
        },
        /* MAke a pretty date for showing last_update */
        returned: function(){
            if (this.transaction.return_date == null) return null;
            var options = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            var day  = new Date(this.transaction.return_date);
            return day.toLocaleString("en-US", options);
        }
    },
    props: ['id', 'name', 'email', 'transaction']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .thumbnail {
        width: 75px;
    }

    td {
        text-align: left;
    }
</style>
