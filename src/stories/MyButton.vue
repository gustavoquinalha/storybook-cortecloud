<template>
<div class="">
  <button class="btn" @click="onClick" :style="{borderRadius: this.rounded + 'px'}">
    <slot></slot>
  </button>
</div>
</template>

<script>
  export default {
    name: 'my-button',
    props: {
      rounded: {
        type: String
      }
    },
    methods: {
      onClick () {
        this.$emit('click')
      }
    },
    computed: {
    }
  }
</script>

<story
  group="Buttons"
  name="Button"
  methods="{handleClick: action('click')}"
  knobs="{buttonText: text('Button text', 'Button text'), borderRadius: number('Border radius', this.rounded, 10)}"
  notes="Notes">
  <my-button @click="handleClick">
    {{ buttonText }}
  </my-button>
</story>

<style>

</style>
