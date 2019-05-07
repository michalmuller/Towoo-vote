<template>
  <div id="app">
    <vote-page></vote-page>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import "../node_modules/flexboxgrid/dist/flexboxgrid.min.css";
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600");
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222222;
  overflow-x: hidden;
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  font-size: 54px;
}

h2 {
  font-size: 44px;
}

h3 {
  font-size: 24px;
}
</style>
