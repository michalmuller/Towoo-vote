<template>
  <div class="container row">
    <div class="hero-question col-xs-9 col-md-offset-2">
      <h1 class>New Menu?</h1>
      <h2 class>Let's decide together</h2>
    </div>
    <div class="col-md-offset-2">
      <img class="img-thumbs" src="../../resources/thumbs-crop.png" alt="thumbs up">
    </div>
    <h3 class="made-by col-xs-6">Made with love by {{madeBy}}</h3>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      madeBy: "Towoo"
    };
  }
};
</script>

<style scoped>
.container {
  padding-left: 20px !important;
  position: relative;
  width: 100%;
  height: 600px;
}
.img-thumbs {
  position: absolute;
  bottom: 0;
  left: 44%;
}

.hero-question {
  margin-top: 200px;
  z-index: 1;
}

.made-by {
  position: absolute;
  bottom: 14px;
  left: 20px;
  opacity: 0.2;
}
</style>
