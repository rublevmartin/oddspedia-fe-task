<template>
  <header class="header">
    <HeaderNav />
  </header>

  <main class="main">
    <MainContainer />
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import MainContainer from './components/MainContainer.vue';
import HeaderNav from './components/HeaderNav.vue';

export default {
  components: {
    HeaderNav,
    MainContainer
  },

  methods: {
    async fetchData(url, method) {
      try {
        const response = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" }
        });

        const rawText = await response.text();
        const newText = rawText.replace(/,\s*}/g, '}').replace(/,\s*\]/g, ']');

        return JSON.parse(newText);
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    },

    async fetchReportFlow() {
      const data = await this.fetchData('/api/oddspedia-task/teams.json', 'GET');

      if (data) {
        const footballTeams = data.football_teams;
        console.log('Fetched data:', footballTeams);
        this.setTeams(footballTeams);

        //this.filterNames(footballTeams, "Stad");
      } else {
        console.error('Failed to fetch data or invalid JSON.');
      }
    },

    filterNames(data, string) {
      const filteredTeams = [];
      const searchString = string.toLowerCase();

      data.forEach(element => {
        const checkValues = [element.name, element.stadium];

        element.leagues.forEach(league => {
          checkValues.push(league);
        })

        checkValues.forEach(value => {
          if (value.toLowerCase().includes(searchString)) {
            filteredTeams.push(element);
          }
        })
      });

      this.filterTeams(filteredTeams);
    },

    ...mapActions(['setTeams', 'filterTeams'])
  },

  mounted() {
    this.fetchReportFlow();
  }
}
</script>

<style scoped lang="scss">
.main {
  border-radius: 8px;
  max-width: 600px;
  margin: 16px auto;
  box-shadow: 0 0 20px rgba($darker-color, .06);
  overflow: hidden;

  @media #{$mobile} {
    border-radius: 0;
    margin: 0;
    max-width: 100%;
  }
}
</style>
