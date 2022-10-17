<template>
  <section class="section">
    {{$auth.loggedIn}}
    <div class="container">
      <h1 class="title">Dashboard</h1>

      <p>Hi {{ user.name }}</p>

      <a href="#" @click.prevent="logout">Logout</a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: this.$auth.user.data,
    }
  },
  methods: {
    async logout() {
      try{
        await this.$auth.logout()
      }
      catch(err){
        console.log(err)
      }
      // this.$router.push('/login')
    },
  },
}
</script>