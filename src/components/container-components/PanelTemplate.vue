<template>
  <div class="panel" :class="{ active: isActive }">
    <div class="panel__body">
      <div class="panel__image">
        <img src="/team-placeholder.png" alt="Team Placeholder"
          srcset="/team-placeholder.png 1x, /team-placeholder@2x.png 2x, /team-placeholder@3x.png 3x"
          class="profile__image" />
      </div>

      <div class="panel__content">
        <p class="panel__entry">
          {{ leagues.firstPart }}<strong>{{ leagues.secondPart }}</strong>{{ leagues.thirdPart }}
        </p>

        <div class="panel__row">
          <h3 class="panel__title">
            {{ firstPartFunc }}
            {{ name.firstPart }}<strong>{{ name.secondPart }}</strong>{{ name.thirdPart }}
          </h3>

          <img src="/stadium.svg" alt="" class="panel__icon">

          <h4 class="panel__subtitle">
            {{ stadium.firstPart }}<strong>{{ stadium.secondPart }}</strong>{{ stadium.thirdPart }}
          </h4>
        </div>
      </div>
    </div>

    <div class="panel__actions">
      <button class="btn" @click="follow" :class="{ 'active': this.team.id in this.allFollowed }">
        <span v-if="this.team.id in this.allFollowed">Followed</span>
        <span v-else>Follow</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      name: {
        firstPart: "",
        secondPart: "",
        thirdPart: "",
      },

      stadium: {
        firstPart: "",
        secondPart: "",
        thirdPart: "",
      },

      leagues: {
        firstPart: "",
        secondPart: "",
        thirdPart: "",
      }
    };
  },

  props: {
    team: {
      type: Object,
      required: true,
    },

    isActive: {
      type: Boolean,
      required: false,
      default: false
    },

    timeOutInProggress: {
      type: Boolean,
      required: true,
    },

    searchValue: {
      type: String,
      required: true,
    },

    searchValueLength: {
      type: Number,
      required: true,
    }
  },

  computed: {
    ...mapGetters(['allFollowed']),

    firstPartFunc() {
      if (!this.timeOutInProggress) {
        let leagues = "";

        this.team.leagues.forEach(element => {
          if (leagues !== "") {
            leagues += ", ";
          }

          leagues += element;
        });

        const valuesArr = [
          this.team.name,
          this.team.stadium,
          leagues
        ];

        const targetArr = [
          this.name,
          this.stadium,
          this.leagues,
        ];

        for (let i = 0; i < valuesArr.length; i++) {
          const originString = valuesArr[i];
          const originStringLowerCase = originString.toLowerCase();
          const startIndex = originStringLowerCase.indexOf(this.searchValue.toLowerCase());

          if (startIndex >= 0) {
            targetArr[i].firstPart = originString.slice(0, startIndex);
            targetArr[i].secondPart = originString.slice(startIndex, this.searchValueLength + startIndex);
            targetArr[i].thirdPart = originString.slice(this.searchValueLength + startIndex);
          } else {
            targetArr[i].firstPart = originString;
            targetArr[i].secondPart = targetArr[i].thirdPart = "";
          }
        }
      }
    },
  },

  methods: {
    follow() {
      const newArray = this.allFollowed;

      this.setFollowed({ id: this.team.id, value: this.team.name });
    },

    ...mapActions(['setFollowed']),
  }
};
</script>