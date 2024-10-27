<template>
  <div class="panel">
    <div class="panel__body">
      <div class="panel__image">
        <img src="/team-placeholder.png" alt="Team Placeholder"
          srcset="/team-placeholder.png 1x, /team-placeholder@2x.png 2x, /team-placeholder@3x.png 3x"
          class="profile__image" />
      </div>

      <div class="panel__content">
        <div class="panel__row">
          <h3 class="panel__title">
            {{ name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  }
}
</script>