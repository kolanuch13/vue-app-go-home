<template>
  <button
    v-on="$listeners"
    :type="type"
    :class="{ button: true, 'button--outlined': outlined }"
  >
    <CircleLoader
      v-if="loading"
      width="38"
      height="38"
      class="button__loader"
    />
    <span class="button__content" :class="contentStyle">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import CircleLoader from "../loaders/CircleLoader.vue";

export default {
  name: "SubmitButton",
  components: {
    CircleLoader,
  },
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentStyle() {
      return {
        "button__content--hidden": this.loading,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.button {
  position: relative;
  display: inline-block;
  font-size: 18px;
  background-color: $main-color;
  color: $white-color;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  transition: background-color 0.4s, color 0.4s;
  font-family: Montserrat, sans-serif;

  &:hover {
    background-color: $white-color;
    color: $main-color;
    border: 1px solid $main-color
  }

  &--outlined {
    background: transparent;
    border: 1px solid $main-color;
    color: $main-color;
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
