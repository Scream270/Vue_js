/*jshint esversion:6*/
import home from "./components/page/home.vue";
import contact from "./components/page/contact.vue";
import folio from "./components/page/folio.vue";

export const routes = [
  {
    path:"/", label:"Accueil", name: "home", components:home
  },{
    path:"/contact", label:"Contact", name: "contact", components:contact
  },{
    path:"/folio", label:"Porte-Folio", name: "folio", components:folio
  },
  {
    path:"*", label:"404", name:"404", components:home
  },

];
