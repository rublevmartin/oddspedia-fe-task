<template>
  <header>
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

          <span class="nav__alert-index">2</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 10px 32px;
  background-color: $dark-color;

  a {
    display: inline-block;
    transition: transform .2s;

    &+a {
      margin-left: 15px;
    }

    &:hover {
      transform: scale(1.2);
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
      color: #fff;
      line-height: $nav-alert-line-height;
      text-align: center;
      font-size: $nav-alert-radius + 1;
      border: $nav-alert-border solid $dark-color;
      background-color: $accent-color;
      transition: transform .3s;
    }
  }
}
</style>
