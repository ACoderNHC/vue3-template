<template>
  <button
    class="el-button"
    :class="[props.size ? `el-button--${props.size}` : '']"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { withDefaults } from "vue";
interface Props {
  size?: "" | "small" | "medium" | "large";
}
const props = withDefaults(defineProps<Props>(), {
  size: "",
});
</script>
