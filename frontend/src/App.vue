<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  font-family: "Roboto Light", sans-serif;
  transition: 0.25s;
}

h1 {
  font-weight: normal;
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  color: #de4237;
  font-weight: bold;

  &:hover {
    color: #ff5747;
  }
}

.mt-1 {
  margin-top: 1rem;
}

.mb-2 {
  margin-bottom: 2rem;
}
</style>
