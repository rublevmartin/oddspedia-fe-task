<template>
  <nav class="nav">
    <div class="nav__side">
      <a href="#" class="nav__back">
        <img src="arrow-left.svg" alt="Back">
      </a>

      <a href="#" class="nav__logo">
        <img src="logo.svg" alt="Oddspedia Logo">
      </a>
    </div>

    <div class="nav__side">
      <a href="#" class="nav__alert">
        <img src="notification.svg" alt="Notification Icon">

        <h6 class="nav__alert-index">2</h6>
      </a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 10px 32px;
  background-color: $dark-color;

  @media #{$mobile} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 55px;
    padding: 10px 15px;
  }

  a {
    display: inline-block;
    transition: transform .2s;

    &+a {
      margin-left: 15px;

      @media #{$mobile} {
        margin-left: 10px;
      }
    }

    &:hover {
      transform: scale(1.3);
    }
  }

  &__side {
    line-height: 1;
  }

  &__alert {
    position: relative;

    &:hover {
      .nav__alert-index {
        transform: translate(5px, 5px) scale(1.1);
      }
    }

    &-index {
      $nav-alert-border: 2px;
      $nav-alert-radius: 9px;
      $nav-alert-diameter: $nav-alert-radius*2;
      $nav-alert-line-height: $nav-alert-diameter - $nav-alert-border*2;

      position: absolute;
      bottom: -5px;
      right: -$nav-alert-radius;
      display: inline-block;
      width: $nav-alert-diameter;
      height: $nav-alert-diameter;
      border-radius: $nav-alert-radius;
      color: $white-color;
      line-height: $nav-alert-line-height;
      text-align: center;
      border: $nav-alert-border solid $dark-color;
      background-color: $accent-color;
      transition: transform .3s;
    }
  }
}
</style>
