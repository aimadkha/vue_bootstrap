<template>
<div>
    <Navbar></Navbar>
    <router-view>
    </router-view>

    
</div>

</template>
     
 <script>
    import Navbar from './components/Navbar.vue'
    // import Signup from './components/Signup.vue'
    export default {
       components : {
         Navbar
        //  Signup



       }
    
 }
 </script>
<style>

</style>
