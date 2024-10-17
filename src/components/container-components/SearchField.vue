<template>
  <div class="field">
    <button class="field__btn">
      <img src="search.svg" alt="Search Teams">
    </button>

    <input type="text" placeholder="Search for a team" class="field__inner">

    <button class="field__btn field__btn--right">
      <img src="close.svg" alt="Close Search">
    </button>
  </div>

  <div class="dropdown-field">
    <div class="panel">
      <div class="panel__body">
        <div class="panel__image">
          <img src="team-placeholder.png" alt="Team Placeholder"
            srcset="team-placeholder.png 1x, team-placeholder@2x.png 2x, team-placeholder@3x.png 3x"
            class="profile__image" />
        </div>

        <div class="panel__content">
          <p class="panel__entry">
            Primera Division, Champions League
          </p>

          <div class="panel__row">
            <h3 class="panel__title">
              Barcelona
            </h3>

            <img src="stadium.svg" alt="" class="panel__icon">

            <h4 class="panel__subtitle">
              Allianz Arena
            </h4>
          </div>
        </div>
      </div>

      <div class="panel__actions">
        <button class="btn">Follow</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown-field {
  padding-top: 4px;
}

.panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 5px 14px;
  transition: background-color .2s;

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