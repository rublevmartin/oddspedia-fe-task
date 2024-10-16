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
</template>

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