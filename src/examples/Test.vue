<template>
  <div @click="handleSubmit">{{ a }}{{ $store.state }}</div>
</template>

<script>
export default {
  name: 'Test',
  methods: {
    handleSubmit() {
      this.$store.state.test = '123'
      this.$emit('update:title', '修改标题')
      this.$emit('update:visible', false)
    }
  }
}
</script>
