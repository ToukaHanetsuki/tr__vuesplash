<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/">
      Vuesplash
    </RouterLink>
    <div class="navbar__menu">
      <div v-if="isLogin" class="navbar__item">
        <button class="button">
          <i class="icon ion-md-add"></i>
          Submit a photo
        </button>
      </div>
      <span v-if="isLogin" class="navbar__item">
        {{ username }}
      </span>
      <div v-else class="navbar__item">
        <RouterLink class="button button--link" to="/login">
          Login / Register
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed } from '@vue/composition-api'

export default defineComponent({
  setup(prop, ctx: SetupContext) {
    const isLogin = computed(() => ctx.root.$store.auth.check)
    const username = computed(() => ctx.root.$store.auth.username)

    return {
      isLogin,
      username
    }
  }
})
</script>
