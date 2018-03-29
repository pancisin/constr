<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        coNstr
      </a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'foundation' }" class="nav-link">
            Foundation
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'walls' }" class="nav-link">
            Walls
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
};
</script>

<style lang="less">
.navbar {
  background: none;
}
</style>
