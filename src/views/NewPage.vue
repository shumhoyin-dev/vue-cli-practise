<template lang="">
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">
          ComponentA
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action"
          >ComponentB</router-link
        >
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
