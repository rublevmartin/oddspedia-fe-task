<template>
  <div class="empty-placeholder">
    <p>You aren't following any teams yet.</p>
  </div>
</template>

<style scoped lang="scss">
.empty-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: calc(100% - 20px);
  height: 90px;
  background-color: $base-color;
  font-size: 12px;
  line-height: 1.33;
  border-radius: 8px;
  text-align: center;
  color: $disabled-color;
  text-align: center;
}
</style>