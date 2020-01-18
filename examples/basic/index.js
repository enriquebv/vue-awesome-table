import Vue from "vue/dist/vue";
import VueTable from "../../src/index";

Vue.use(VueTable);

const headers = [
  {
    name: "Name",
    columns: [
      { name: "First Name", property: "firstName" },
      { name: "Last Name", property: "lastName" }
    ]
  },
  {
    header: "Info",
    columns: [
      { name: "Age", property: "age" },
      { name: "Visits", property: "visits" }
    ]
  }
];

new Vue({
  data: { headers },
  template: '<VueTable :headers="headers"/>'
}).$mount("#app");
