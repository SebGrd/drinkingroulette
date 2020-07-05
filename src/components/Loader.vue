<template>
  <div class="spinner">
    <div class="lds-ring"
         v-bind:style="{ '--loader-color': color , '--loader-size': size }">
      <div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: ['color', 'size']
}
</script>

<style scoped>
  .lds-ring {
    display: inline-block;
    position: relative;
    width: var(--loader-size);
    height: var(--loader-size);
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: var(--loader-size);
    height: var(--loader-size);
    margin: 8px;
    border: 4px solid var(--loader-color);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--loader-color) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.30s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.15s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.24s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
