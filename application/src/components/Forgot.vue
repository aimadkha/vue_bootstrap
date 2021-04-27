<template>
     <div class="container col-lg-4 d-flex justify-content-center align-items-center p-5 wrapper shadow-lg">
    <form class="col-lg-8">
     <div class="form-group row d-flex flex-column">
       <label for="inputEmail3" class="col-sm-12 col-form-label h3">Email Adress</label>
          <div class="col-sm-12">
            <input type="email" class="form-control" id="inputEmail3" >
          </div>
     </div>
     <div class="form-group row">
          <div class="col-sm-12">
              <b-button variant="dark" class="w-100 shadow p-3 rounded">Reset Password</b-button>
          </div>
      </div>      
</form>
</div>
</template>

<script>
export default {
    name  : 'signin'

}
</script>

<style scoped>
.wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 70%;
  /* width:30%; */
  background-color: white;
  border-radius: 1rem;
}

</style>