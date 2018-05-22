
<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Contact' }" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.gap {
  margin-top: 50px;
}
</style>

<script>
export default {
  name: "app"
};
</script>
<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Contact' }" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.gap {
  margin-top: 50px;
}
</style>

<script>
export default {
  name: "app"
};
</script>
