<template>
  <footer class="footer">
    <button class="button button--link" @click="logout">Logout</button>
    <RouterLink class="button button--link" to="/login">
      Login / Register
    </RouterLink>
  </footer>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'

export default defineComponent({
  setup(prop, ctx: SetupContext) {
    return {
      async logout () {
        await ctx.root.$store.auth.logout()
        ctx.root.$router.push('/login')
      }
    }
  }
})
</script>
