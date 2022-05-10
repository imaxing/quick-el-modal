import QuickElModal from './quick-el-modal'
export default {
  install(Vue, opts = {}) {
    Vue.prototype[opts.name || 'quickModal'] = options => {
      const ModalInstance = Vue.extend(QuickElModal)
      ModalInstance.prototype.$store = opts.store
      ModalInstance.prototype.$router = opts.router
      ModalInstance.prototype.$route = opts.route
      const instance = new ModalInstance({
        data: {
          ...options,
          destroy: () => instance.$el.remove()
        }
      })

      instance.$mount()
      document.body.appendChild(instance.$el)
      instance.$nextTick(() => {
        instance.visible = true
      })

      return instance
    }
  }
}
