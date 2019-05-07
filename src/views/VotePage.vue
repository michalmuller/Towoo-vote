<template>
  <div class="row">
    <Hero/>
    <VoteSection/>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import VoteSection from "../components/VoteSection";
export default {
  name: "VotePage",
  components: {
    Hero,
    VoteSection
  }
};
</script>

<style scoped>
</style>
