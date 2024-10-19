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
      <button v-if="checkIfFollowed" class="btn active" @click="unfollow">
        Followed
      </button>

      <button v-else class="btn" @click="follow">
        Follow
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
      },

      followedLocal: false,
      followIndex: 0,
      followTimeout: false
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

    followedTeams() {
      return this.allFollowed;
    },

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

    checkIfFollowed() {
      const newArray = this.allFollowed;

      newArray.forEach((element) => {
        if (element == this.team.id) {
          this.followedLocal = true;
        }
      });

      return this.followedLocal;
    }
  },

  methods: {
    follow() {
      if (!this.followTimeout) {
        let newArray = this.allFollowed;
        this.followIndex = newArray.length;
        newArray.push(this.team.id);
        this.setFollowed(newArray);

        this.followTimeout = true;

        setTimeout(() => {
          this.followTimeout = false;
        }, 10);
      }
    },

    unfollow() {
      if (!this.followTimeout) {
        console.log('okay')
        const newArray = this.allFollowed;
        const finalArr = newArray.splice(this.followIndex, 1);
        this.followedLocal = false;

        this.setFollowed(finalArr);

        this.followTimeout = true;

        setTimeout(() => {
          this.followTimeout = false;
        }, 10);
      }
    },

    ...mapActions(['setFollowed']),
  }
};
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 5px 14px;
  transition: background-color .2s;

  &.active,
  &:hover {
    background-color: $base-color;

    .panel__image {
      background-color: $white-color;
    }
  }

  strong {
    font-weight: inherit;
    color: $accent-color;
  }

  &__body {
    display: flex;
    align-items: center;
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 20px;
    background-color: $base-color;
    transition: background-color .2s;
  }

  &__entry {
    color: $disabled-color;
    font-size: 11px;
  }

  &__title {
    line-height: 1.36;
    font-weight: 500;
    font-family: $font-primary;
    font-style: normal;
  }

  &__icon {
    display: inline-block;
    margin: 0 0 2px 12px;
  }

  &__subtitle {
    position: relative;
    margin: 1px 0 0 6px;
    font-weight: 12;
    line-height: 1.17;
    color: $disabled-color;

    &:before {
      content: '';
      position: absolute;
      display: inline-block;
      top: 50%;
      left: -26px;
      height: 10px;
      margin-top: -5px;
      border-right: 1px solid $base-darker-color;
    }
  }

  &__row {
    display: flex;
    align-items: center;
  }
}
</style>
