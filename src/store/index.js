import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [
      {
        id: 1,
        img: "https://picsum.photos/id/237/1024/480",
        caption: "First Slide",
        exp: "Hello everyone, this is the small explanation of first event"
      },
      {
        id: 2,
        img: "https://picsum.photos/id/247/1024/480",
        caption: "Second Slide",
        exp: "Hello everyone, this is the small explanation of second event"
      },
      {
        id: 3,
        img: "https://picsum.photos/id/240/1024/480",
        caption: "Third Slide",
        exp: "Hello everyone, this is the small explanation of third event"
      },
      {
        id: 4,
        img: "https://picsum.photos/id/258/1024/480",
        caption: "Fourth Slide",
        exp: "Hello everyone, this is the small explanation of fourth event"
      },
      {
        id: 5,
        img: "https://picsum.photos/id/249/1024/480",
        caption: "Fifth Slide",
        exp: "Hello everyone, this is the small explanation of fifth event"
      },
      {
        id: 6,
        img: "https://picsum.photos/id/279/1024/480",
        caption: "Sixth Slide",
        exp: "Hello everyone, this is the small explanation of sixth event"
      }
    ],
    products: [
      {
        id: 1,
        title: "Product 1",
        exp: "This is the small explanation of product 1 This is the small explanation of product 1 This is the small explanation of product 1",
        img: "https://picsum.photos/id/247/250/180"
      },
      {
        id: 2,
        title: "Product 2",
        exp: "This is the small explanation of product 2 This is the small explanation of product 2 This is the small explanation of product 2",
        img: "https://picsum.photos/id/248/250/180"
      },
      {
        id: 3,
        title: "Product 3",
        exp: "This is the small explanation of product 3 This is the small explanation of product 3 This is the small explanation of product 3",
        img: "https://picsum.photos/id/249/250/180"
      },
      /*{
        id: 4,
        title: "Product 4",
        exp: "This is the small explanation of product 4"
      },
      {
        id: 5,
        title: "Product 5",
        exp: "This is the small explanation of product 5"
      },*/
    ],
    showNavbar: true,
    lastScrollPosition: 0,
  },
  getters: {
    getEvents: state => {
      return state.events;
    },
    getProducts: state => {
      return state.products;
    },
    showNavbar: state => {
      return state.showNavbar;
    },
    lastScrollPosition: state => {
      return state.lastScrollPosition;
    }
  },
  mutations: {
    updateShowNavbar(state, payload) {
      state.showNavbar = payload.value;
    },
    updateLastScrollPosition(state, payload) {
      state.lastScrollPosition = payload.value;
    }
  },
  actions: {},
  modules: {},
});
