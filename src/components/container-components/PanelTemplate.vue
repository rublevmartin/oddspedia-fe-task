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
          <span v-for="(league, index) in team.leagues" :key="index">
            <span v-if="index > 0"> , </span> {{ league }}
          </span>
        </p>

        <div class="panel__row">
          <h3 class="panel__title">
            {{ team.name }}
          </h3>

          <img src="/stadium.svg" alt="" class="panel__icon">

          <h4 class="panel__subtitle">
            {{ team.stadium }}
          </h4>
        </div>
      </div>
    </div>

    <div class="panel__actions">
      <button class="btn">Follow</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      required: true,
    },

    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
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
