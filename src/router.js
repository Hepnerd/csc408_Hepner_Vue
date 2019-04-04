import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movie from './views/Movie'
import CustomerDetails from './views/CustomerDetails'
import MovieDetails from './views/MovieDetails'
import MovieRentals from './views/MovieRentals'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/movie-details/:userId',
      name: 'movie-details',
      // component: MovieDetails
      // route level code-splitting
      // this generates a separate chunk (movies.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "movies" */ './views/MovieDetails.vue')
    },
    {
      path: '/movie-details/:userId/rentals',
      name: 'movie-rentals',
      // component: MovieDetails
      // route level code-splitting
      // this generates a separate chunk (movies.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "movies" */ './views/MovieRentals.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/Customer.vue')
    },
    {
      path: '/customer-details/:userId',
      name: 'customer-details',
      // component: CustomerDetails
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/CustomerDetails.vue')
    },
    {
      path: '/customer-details/:userId/rentals',
      name: 'customer-rentals',
      // component: CustomerRentals
      // route level code-splitting
      // this generates a separate chunk (customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "customers" */ './views/CustomerRentals.vue')
    }
  ]
})
