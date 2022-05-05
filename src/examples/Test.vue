<template>
  <el-button @click="handleSubmit">测试组件</el-button>
</template>

<script>
export default {
  name: 'Test',
  data: () => ({ b: 2 }),
  methods: {
    handleSubmit() {
      console.log(123)
      this.$emit('update:title', '修改标题')
      this.$emit('update:visible', false)
    }
  }
}
</script>
