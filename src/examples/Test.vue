<template>
  <el-button @click="handleSubmit">测试组件{{ $store.state }}, testGetter: {{ testGetter }}</el-button>
</template>

<script>
export default {
  name: 'Test',
  data: () => ({ b: 2 }),
  computed: {
    ...window.Vuex.mapGetters(['testGetter'])
  },
  methods: {
    handleSubmit() {
      this.$store.state.test = '123'
      this.$emit('update:title', '修改标题')
      this.$emit('update:visible', false)
    }
  }
}
</script>
