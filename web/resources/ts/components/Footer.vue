<template>
  <footer class="footer">
    <button  v-if="isLogin" class="button button--link" @click="logout">Logout</button>
    <RouterLink v-else class="button button--link" to="/login">
      Login / Register
    </RouterLink>
  </footer>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed } from '@vue/composition-api'

export default defineComponent({
  setup(prop, ctx: SetupContext) {
    const isLogin = computed(() => ctx.root.$store.auth.check)

    return {
      isLogin,

      async logout () {
        await ctx.root.$store.auth.logout()
        ctx.root.$router.push('/login')
      }
    }
  }
})
</script>
