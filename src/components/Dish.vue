<template>
  <div class="dish-container">
    <h3>{{item.name}}</h3>
    <p class="total-count">total clicks: {{item.count}}</p>

    <div v-for="(dish, index) in item.dishes" :key="index" class="dish">
      <div class>
        <h3 class="dish-name">{{dish.name}}</h3>
        <div class="card row">
          <img class="dish-img col-lg-5 col-md-6 col-sm-6 col-xs-12" :src="dish.img" alt="dish">
          <div class="likes">
            <div
              @mouseover="dish.thumbsUp=true"
              @mouseleave="dish.thumbsUp=false"
              @click="like(index)"
            >
              <thumb-svg :fillColor="dish.thumbsUp? '#85A863': '#9D9D9D'" class="like-img"></thumb-svg>
            </div>
            <p class="like-count">{{dish.likes}}</p>
          </div>
          <div class="dislikes">
            <div
              @mouseover="dish.thumbsDown=true"
              @mouseleave="dish.thumbsDown=false"
              @click="dislike(index)"
            >
              <thumb-svg :fillColor="dish.thumbsDown? '#A5665C': '#9D9D9D'" class="dislike-img"></thumb-svg>
            </div>
            <p class="dislike-count">{{dish.dislikes}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dish",
  props: ["item"],
  data() {
    return { thumbsDown: "#9D9D9D", thumbsUp: "#9D9D9D" };
  },
  methods: {
    like(i) {
      this.$emit("pass-like", i);
    },
    dislike(i) {
      this.$emit("pass-dislike", i);
    }
  }
};
</script>

<style scoped>
.dish-container {
  margin-top: 80px;
}
.dish {
  padding-bottom: 30px;
  width: 100%;
}

.card {
  display: flex;
  align-items: center;
}

.total-count {
  padding-bottom: 50px;
}

.dish-name {
  padding-bottom: 14px;
}

.dish-img {
  width: 360px;
  height: 240px;
  margin-bottom: 30px;
  object-fit: cover;
}
.like-img,
.dislike-img {
  width: 50px;
  height: auto;
  cursor: pointer;
}

.dislike-img {
  transform: rotate(180deg);
  margin-top: 10px;
}

.like-count,
.dislike-count {
  text-align: center;
  display: block;
  font-weight: 700;
  font-size: 30px;
}

.like-count {
  padding-top: 20px;
}
.dislike-count {
  padding-top: 10px;
}

.likes,
.dislikes {
  margin-left: 40px;
  user-select: none;
}

.like-img:active {
  margin-top: -10px;
  transform: rotate(-5deg);
  transition: initial 0.1s;
}

.dislike-img:active {
  margin-top: 20px;
  transform: rotate(175deg);
  transition: initial 0.1s;
}

@media only screen and (max-width: 767px) {
  .likes {
    margin-left: 10px;
  }
}
</style>
