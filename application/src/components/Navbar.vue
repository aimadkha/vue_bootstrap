<template>
  <div class="wrapper">
  <!-- Content here -->
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-col >
      <b-navbar-brand>Youssoufia Youcode</b-navbar-brand>
    </b-col>
    <b-col>
       <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
               <router-link to="/signin"><button class="btn btn-light" type="submit">Sign in</button></router-link>
               <router-link to="/"><button class="btn btn-outline-primary" type="submit" id="signup"> Sign up</button></router-link>
            </b-navbar-nav>
       </b-collapse>
    </b-col>
   
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #text-color{
     color: rgb(255, 255, 255);
     }
     .wrapper{
       width: 100%;
     }

</style>
