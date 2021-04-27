<template>
  <div id="app">
    <IntroPage />
    <AboutPage />
    <experience />
    <skills />
    <projects />
    <Footer />
  </div>
</template>
<script>
import IntroPage from "@/components/IntroPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import experience from "@/components/experience.vue";
import skills from "@/components/SkillsPage.vue";
import Footer from "@/components/Footer.vue";
import projects from "@/components/Projects";

export default {
  components: { IntroPage, experience, AboutPage, skills, projects, Footer },
  name: "app",
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
