<template>
  <div>
    {{$auth.loggedIn}}
  </div>
</template>

<script>
export default {
  auth: false, // deixa a autenticação global false, ou seja, pode ser acessada msm sem estar logado
  mounted() {
    this.$axios
      .$get("category/all")
      .then((r) => {
        console.log(r)
      })
      .catch((err) => {
        console.log(err)
      });
  },
};
</script>

<style>
</style>