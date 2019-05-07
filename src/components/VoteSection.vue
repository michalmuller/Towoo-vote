<template>
  <div class="row col-xs-12 container">
    <div class="col-md-offset-2 col-xs-12 col-md-8">
      <button class="btn-reset" @click="reset">Reset All</button>
      <dish
        v-on:pass-like="like($event, index)"
        v-on:pass-dislike="dislike($event, index)"
        v-for="(menuItem, index) in menu"
        :key="index"
        :item="menuItem"
      ></dish>
    </div>
  </div>
</template>

<script>
// There would probably be call to an API to fetch the data
// and then have just loading:false that would switch to true once
// the data are loaded and everything would be displayed afterwards.
function initialState() {
  return {
    menu: [
      {
        name: "Side Dishes",
        count: 0,
        dishes: [
          {
            name: "Mashed Potatoes",
            img: require("../../resources/mashedPotato.jpg"),
            likes: 0,
            dislikes: 0
          },
          {
            name: "Baked Potatoes",
            img: require("../../resources/bakedPotato.jpeg"),
            likes: 0,
            dislikes: 0
          }
        ]
      },
      {
        name: "Fish Main Dishes",
        count: 0,
        dishes: [
          {
            name: "Honey Salmon with Asparagus",
            img: require("../../resources/honeySalmon.jpg"),
            likes: 0,
            dislikes: 0
          },
          {
            name: "Sweet Miso Cod with Sugar Snap Peas",
            img: require("../../resources/sweetMisoCod.jpg"),
            likes: 0,
            dislikes: 0
          }
        ]
      }
    ]
  };
}
export default {
  name: "VoteSection",
  data() {
    return initialState();
  },
  methods: {
    like(child, parent) {
      this.menu[parent].count++;
      this.menu[parent].dishes[child].likes++;
    },
    dislike(child, parent) {
      this.menu[parent].count++;
      this.menu[parent].dishes[child].dislikes++;
    },
    reset() {
      Object.assign(this.$data, initialState());
    }
  }
};
</script>

<style scoped>
.container {
  padding-left: 20px !important;
  padding-bottom: 200px !important;
  color: white;
  background-color: #222222;
}

.btn-reset {
  background-color: transparent;
  color: #dcc463;
  border: 2px solid #dcc463;
  font-weight: 500;
  padding: 8px 28px;
  font-size: 18px;
  float: right;
  margin-top: 80px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
}

.btn-reset:hover {
  transition: all 0.2s;
  background-color: #dcc463;
  color: #222222;
}

.btn-reset:focus {
  outline: none;
}
</style>
