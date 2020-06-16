<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  components: {
    Navbar,
    Footer
  }
})
</script>
