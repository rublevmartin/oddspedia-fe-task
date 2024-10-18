<template>
  <div class="profile">
    <div class="profile__head">
      <div class="profile__aside">
        <h1 class="profile__title">
          RichyRich
        </h1>
      </div>

      <div class="profile__content">
        <img src="/avatar.png" alt="Avatar Picture" srcset="/avatar.png 1x, /avatar@2x.png 2x, /avatar@3x.png 3x"
          class="profile__image" />

        <h6 class="profile__badge">
          Level 5
        </h6>
      </div>
    </div>

    <div class="profile__nav">
      <ul>
        <li class="active"><a href="">My Teams</a></li>
        <li><a href="">About</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  background-color: $darker-color;
  color: $white-color;

  &__head {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    padding: 40px 42px 53px;

    @media #{$mobile} {
      flex-direction: column;
      padding: 0 15px;
    }
  }

  &__aside {
    margin-left: 20px;

    @media #{$mobile} {
      position: relative;
      display: flex;
      align-items: center;
      height: 55px;
      margin: 0 0 39px;
    }
  }

  &__content {
    position: relative;
    line-height: 0;

    @media #{$mobile} {
      margin-bottom: 51px;
    }
  }

  &__badge {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: 5px;
    padding: 2px 7px;
    background-color: rgba($white-color, .05);
    border-radius: 9px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    transform: translateX(-50%);
  }

  &__nav {
    font-size: 11px;
    line-height: 0;
    font-weight: 500;
    text-transform: uppercase;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
    }

    li+li {
      margin-left: 15px;
    }

    .active a {
      color: $white-color;

      &:after {
        transform: translateY(0);
      }
    }

    a {
      position: relative;
      display: inline-block;
      padding: 12px 5px;
      line-height: 1.45;
      color: $disabled-color;
      text-decoration: none;
      overflow: hidden;
      transition: color .3s;

      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        right: 0;
        height: 6px;
        border-radius: 3px;
        background-color: $accent-color;
        transform: translateY(3px);
        transition: transform .3s;
      }

      &:hover {
        color: $white-color;

        &:after {
          transform: translateY(1px);
        }
      }
    }
  }
}
</style>
