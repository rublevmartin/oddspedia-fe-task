<template>
  <div v-if="allFilteredTeams.length > 0" class="dropdown-field">
    <PanelTemplate v-for="(team, index) in allFilteredTeams" :team="team" :isActive="activeItem === index"
      :searchValue="searchValue" :searchValueLength="searchValueLength" :timeOutInProggress="timeOutInProggress"
      @mouseenter="setActiveItem(index)" @mouseleave="deactivatePanel" />
  </div>

  <NoResults v-else-if="searchValueLength > 2 && !timeOutInProggress" />
</template>

<script>
import { mapGetters } from 'vuex';
import PanelTemplate from './PanelTemplate.vue';
import NoResults from './NoResults.vue';

export default {
  data() {
    return {
      activeItem: -1
    }
  },

  components: {
    PanelTemplate,
    NoResults
  },

  computed: {
    ...mapGetters(['allFilteredTeams'])
  },

  props: {
    searchValue: {
      type: String,
      required: true
    },
    searchValueLength: {
      type: Number,
      required: true
    },
    timeOutInProggress: {
      Type: Boolean,
      required: true
    }
  },

  methods: {
    deactivatePanel() {
      this.activeItem = -1;
    },

    setActiveItem(id) {
      this.activeItem = id;
    },

    handleKeyPress(event) {
      if (event.key === "ArrowUp") {
        if (this.activeItem > 0) {
          this.activeItem--;
        }
      } else if (event.key === "ArrowDown") {
        if (this.activeItem < this.allFilteredTeams.length - 1) {
          this.activeItem++;
        }
      }
    },
  },

  mounted() {
    window.addEventListener("keydown", this.handleKeyPress);
  },

  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }
}
</script>

<style scoped lang="scss">
.dropdown-field {
  padding-top: 4px;
}
</style>