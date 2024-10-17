<template>
  <section class="section">
    <div class="section__head">
      <h2 class="section__title">
        {{ title }}
      </h2>
    </div>

    <div class="section__body">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.section {
  background-color: $white-color;
  color: $title-color;

  @media #{$mobile} {
    margin-top: 8px;
  }

  &+.section {
    margin-top: 8px;
  }

  &__head {
    padding: 16px 15px;
  }

  &__title {
    text-transform: uppercase;
  }

  &__body {
    padding: 0 0 10px;
  }
}
</style>