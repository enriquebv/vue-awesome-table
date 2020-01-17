import Component from "./component.vue";

export const VueTableComponent = Component;

export default {
  install(Vue, options) {
    Vue.component(Component.name, Component);
  }
};
