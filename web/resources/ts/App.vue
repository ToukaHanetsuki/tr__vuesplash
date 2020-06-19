<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
        <RouterView />
        {{ currentUser }}
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from '@vue/composition-api'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  components: {
    Navbar,
    Footer
  },
  setup(prop, ctx: SetupContext) {
    const currentUser = computed(() => ctx.root.$store.auth.user)
    return {
      currentUser
    }
  }
})
</script>
