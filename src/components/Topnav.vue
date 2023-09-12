<template>
    <div class="topnav">
        <div class="logo" @click="toggleAside">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside"></span>
    </div>
</template>

<script lang="ts">
import { Ref, inject, ref } from 'vue'

export default {
  setup() {
    const asideVisible = ref(inject<Ref<boolean>>('asideVisible')) // get
    const toggleAside = () => {        
      asideVisible.value = !asideVisible.value
    }
    return { asideVisible, toggleAside }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>