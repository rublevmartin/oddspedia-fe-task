<template>
  <div class="field">
    <button class="field__btn">
      <img src="/search.svg" alt="Search Teams">
    </button>

    <input type="text" v-model="searchValue" placeholder="Search for a team" @input="handleSearchInput"
      class="field__inner">

    <button v-if="searchValueLength > 0" @click="clearSearch" class="field__btn field__btn--right">
      <img src="/close.svg" alt="Close Search">
    </button>
  </div>

  <DropdownField :searchValue="searchValue" :searchValueLength="searchValueLength"
    :timeOutInProggress="timeOutInProggress" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DropdownField from './DropdownField.vue';

export default {
  components: {
    DropdownField
  },

  computed: {
    ...mapGetters(['allTeams'])
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