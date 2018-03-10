<template>
  <div class="nav-menu fixed-top">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-dark navbar-expand-lg">
            <a class="navbar-brand" href="index.html"><img src="" class="img-fluid" alt="Logo"></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbar">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item"> <a class="nav-link active" href="#">HOME <span class="sr-only">(current)</span></a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">TIMELINE</a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">ABOUT US</a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">BLOG</a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">CONTACT</a> </li>
                <li class="nav-item"><a href="#" class="btn btn-outline-light my-3 my-sm-0 ml-lg-3">LOGIN</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        props: ['brand'],
    }
</script>
