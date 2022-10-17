<template>
  <v-row class="ma-0 justify-center">
    {{$auth.loggedIn}}
    <v-col
      cols="5"
      align-self="center"
      class="d-flex justify-center"
      style="height: 70%"
    >
      <v-card
        class="d-flex flex-column justify-center align-center"
        width="100%"
        elevation="10"
        shaped
      >
        <v-card-title class="mb-6" style="font-size: 35px; color: #9c27b0"
          ><b>Bem-Vindo!</b></v-card-title
        >

        <v-card-text style="width: 85%">
          <v-text-field
            v-model="form.email"
            color="purple"
            label="E-mail"
            :error="message != ''"
          ></v-text-field>

          <v-text-field
            v-model="form.password"
            color="purple"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="Senha"
            :error-messages="message != '' ? message : ''"
            @click:append="show = !show"
          ></v-text-field>
          <v-btn small class="pa-0" color="purple" text style="float: right">
            <b>Esqueceu a senha?</b>
          </v-btn>
        </v-card-text>
        <v-card-actions style="width: 85%">
          <v-btn block color="purple" dark @click="login"> Entrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="5" align-self="center" style="height: 100vh">
      <v-img
        lazy-src="Login/loginImg.svg"
        src="Login/loginImg.svg"
        height="100%"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: false,
      message: "",
    };
  },
  methods: {
    // ...mapActions('user', ["ActionLogin"]),
    // async login() {
    //   try {
    //     await this.ActionLogin(this.form);
    //     this.$router.push({ name: "index" });
    //   } catch (err) {
    //     console.log(err)
    //     this.message = err.response
    //       ? err.response.data.message
    //       : "Não foi possível fazer login!";
    //   }
    // },
    async login() {
      await this.$auth
        .loginWith("laravelSanctum", {
          data: this.form,
        })
        .then((r) => {
          console.log(r);
        })
        .catch((err) => {
          console.log(err);
          this.message = err.response
            ? err.response.data.message
            : "Não foi possível fazer login!";
        });
    },
  },
};
</script>

<style>
</style>