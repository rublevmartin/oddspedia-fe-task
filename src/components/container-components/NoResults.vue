<template>
  <div class="no-results">
    <img class="no-results__image" src="/no-results.svg" alt="No Results">

    <p class="no-results__text">No Teams Found</p>
  </div>
</template>

<style scoped lang="scss">
.no-results {
  padding: 14px 15px 10px;
  text-align: center;

  &__text {
    padding-top: 11px;
    font-size: 12px;
    line-height: 1.33;
    color: $disabled-color;
  }
}
</style>