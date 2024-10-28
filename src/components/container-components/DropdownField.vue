<template>
  <div v-if="allFilteredTeams.length > 0" class="dropdown-field">
    <PanelTemplate v-for="team in allFilteredTeams" :team="team" :isActive="false" :searchValue="searchValue"
      :searchValueLength="searchValueLength" :timeOutInProggress="timeOutInProggress" />
  </div>

  <NoResults v-else-if="searchValueLength > 2 && !timeOutInProggress" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PanelTemplate from './PanelTemplate.vue';
import NoResults from './NoResults.vue';

export default {
  components: {
    PanelTemplate,
    NoResults
  },

  computed: {
    ...mapGetters(['allTeams', 'allFilteredTeams'])
  },

  data() {
    return {
      searchValue: "",
      searchValueLength: 0,
      timeOutInProggress: false,
      timeoutID: 0,
    };
  },

  methods: {
    handleSearchInput(event) {
      this.searchValue = event.target.value;
      this.searchValueLength = this.searchValue.length;

      clearTimeout(this.timeoutID);
      this.timeOutInProggress = false;

      if (this.searchValueLength > 2) {
        this.timeOutInProggress = true;

        this.timeoutID = setTimeout(() => {
          this.filterNames(this.allTeams, this.searchValue);
          this.timeOutInProggress = false;
        }, 300);
      } else {
        this.filterTeams([]);
      }
    },

    clearSearch() {
      this.searchValue = "";
      this.searchValueLength = 0;
      this.filterTeams([]);
    },

    filterNames(data, string) {
      const filteredTeams = [];
      const searchString = string.toLowerCase();

      data.forEach(element => {
        const checkValues = [element.name, element.stadium];
        let stringAvailable = false;

        element.leagues.forEach(league => {
          checkValues.push(league);
        })

        checkValues.forEach(value => {
          if (value.toLowerCase().includes(searchString)) {
            stringAvailable = true;
          }
        });

        if (stringAvailable) {
          filteredTeams.push(element);
        }
      });

      this.filterTeams(filteredTeams);
    },

    ...mapActions(['filterTeams']),
  }
}
</script>

<style scoped lang="scss">
.dropdown-field {
  padding-top: 4px;
}

.field {
  position: relative;
  padding: 0 15px 6px;

  &__inner {
    width: 100%;
    height: 36px;
    line-height: 36px;
    border-radius: 18px;
    padding: 0 42px;
    border: 0;
    font-size: 13px;
    color: $dark-color;
    background-color: $base-color;

    &::placeholder {
      color: $disabled-color;
    }
  }

  &__btn {
    border: 0;
    background-color: transparent;
    position: absolute;
    left: 29px;
    top: 10px;
    cursor: pointer;
    transition: transform .2s;

    &:hover {
      transform: scale(1.2);
    }

    &--right {
      left: auto;
      top: 12px;
      right: 30px;
    }
  }
}
</style>