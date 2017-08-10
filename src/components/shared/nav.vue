<template lang="html">
  <nav>
    <ul>
      <li>
        <router-link tag="li"
        :to="{ name: 'home', params: {} }">
        home
      </router-link>
    </li>
    <li>

      <router-link tag="li"
      :to="{ name: 'contact', params: {} }">
      Contact
    </router-link>
  </li>
  <li>

    <router-link tag="li"
    :to="{ name: 'folio', params: {} }">
    folio
  </router-link>
</li>

</ul>
</nav>
</template>

<script>
// @import "styles/global.scss"
export default {
}
</script>

<style lang="scss">

</style>
