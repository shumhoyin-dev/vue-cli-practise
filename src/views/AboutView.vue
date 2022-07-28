<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Card></Card>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "AboutView",
  components: {
    Card,
  },
};
</script>
