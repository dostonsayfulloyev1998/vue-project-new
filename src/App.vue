<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <div id="nav navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/admin" class="nav-link">Admin</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

   export default {
       name:"App",
     data(){
         return{

         }
     },

   }

</script>
