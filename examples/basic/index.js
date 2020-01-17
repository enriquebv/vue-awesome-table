import Vue from "vue/dist/vue";
import VueTable from "../../src/index";

Vue.use(VueTable);

const headers = [
  {
    header: "Name",
    columns: [
      { header: "First Name", accesor: "firstName" },
      { header: "Last Name", accesor: "lastName" }
    ]
  },
  {
    header: "Info",
    columns: [
      { header: "Age", accesor: "age" },
      { header: "Visits", accesor: "visits" }
    ]
  }
];

new Vue({
  data: { headers },
  template: '<VueTable :headers="headers"/>'
}).$mount("#app");
