<template>
  <div class="container">
    <div class="container-head">
      <ProfileComponent />
    </div>

    <div class="container-body">
      <section class="section">
        <div class="section__head">
          <h2 class="section__title">
            Search Teams
          </h2>
        </div>

        <div class="section__body">
          <input type="text" class="field">
        </div>
      </section>

      <section class="section">
        <div class="section__head">
          <h2 class="section__title">
            My Teams
          </h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProfileComponent from './container-components/ProfileComponent.vue';

export default {
  components: {
    ProfileComponent,
  }
}
</script>

<style scoped lang="scss">
.field {
  width: calc(100% - 30px);
  height: 36px;
  line-height: 36px;
  border-radius: 18px;
  padding: 0 36px;
  margin: 0 15px 6px;
  border: 0;
  background-color: $base-color;
}

.container-body {
  background-color: $base-darker-color;
}

.section {
  background-color: $white-color;
  color: $title-color;

  &+.section {
    margin-top: 8px;
  }

  &__head {
    padding: 16px 15px;
  }

  &__body {
    padding: 0 0 10px;
  }
}
</style>