<template>
  <v-hover v-slot:default="{ hover }">
    <v-card height="300" align="center" flat outlined tile>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black" small dark> algo {{}}</v-btn>
      </v-card-actions>
      <v-img :src="clothe.image" width="200" height="200" contain></v-img>
      <v-card-text class="mt-n4">
        <strong :class="hover ? 'red--text' : 'black--text'">{{
          poke.id
        }}</strong>
      </v-card-text>
      <v-expand-transition>
        <div
          v-if="hover"
          class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
          style="height: 100%"
        >
          <v-btn rounded color="white">
            <v-icon>mdi-cart-outlined</v-icon>
            Buy
          </v-btn>
          <v-btn fab small color="white" class="ml-2">
            <v-icon color="black">mdi-content-copy</v-icon>
          </v-btn>
          <v-btn fab small color="white" class="ml-2">
            <v-icon color="black">mdi-heart-outline</v-icon>
          </v-btn>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
import axios from "axios";
//import obtenerItem from "../logic/axios";

export default {
  data: () => ({
    /**
     */
    poke: {},
    page: 1,
    items: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "Catalog",
        disabled: false,
        href: "breadcrumbs_catalog",
      },
      {
        text: "Men",
        disabled: false,
        href: "breadcrumbs_men",
      },
      {
        text: "Shoes",
        disabled: false,
        href: "breadcrumbs_shoes",
      },
    ],
    styles: [
      { title: "Lifestyle", count: "1" },
      { title: "Running", count: "23" },
      { title: "Training & Gym", count: "45" },
      { title: "Basketball", count: "11" },
      { title: "Football", count: "15" },
      { title: "Soccer", count: "32" },
      { title: "Baseball", count: "8" },
      { title: "Golf", count: "15" },
      { title: "Skateboarding", count: "22" },
    ],
    brands: [
      { title: "Lifestyle", state: true },
      { title: "Running", state: false },
      { title: "Training & Gym", state: true },
      { title: "Basketball", state: false },
    ],
    sizes: [
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
    ],
    clothes: [
      {
        class: "pa-0",
        sold: "-20%",
        image: "1.png",
        title: "KD 8 EXT",
        price: "$ 145.00",
      },
      {
        class: "pa-0",
        sold: "-30%",
        image: "2.png",
        title: "Jordan Galaxy",
        price: "$ 599.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-17%",
        image: "3.png",
        title: "Nike SB Trainerendor Leathe",
        price: "$ 190.00",
      },

      {
        class: "pa-0",
        sold: "-22%",
        image: "4.png",
        title: "Air Jordan Spike 40 iD",
        price: "$ 220.00",
      },
      {
        class: "pa-0",
        sold: "-18%",
        image: "5.png",
        title: "Nike Air Footscape Magista Flyknit",
        price: "$ 235.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-40%",
        image: "6.png",
        title: "Nike Air Zoom Huarache 2k4",
        price: "$ 190.00",
      },

      {
        class: "pa-0",
        sold: "-13%",
        image: "7.png",
        title: "Jordan Horizon",
        price: "$ 230.00",
      },
      {
        class: "pa-0",
        sold: "-15%",
        image: "8.png",
        title: "Air Jordan xx9 Low",
        price: "$ 185.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image: "9.png",
        title: "LeBron XIII Premium AS iD",
        price: "$ 265.00",
      },
      {
        class: "pa-0",
        sold: "-19%",
        image: "10.png",
        title: "Air Jordan 1 Retro Hight Nouveau",
        price: "$ 190.00",
      },
      {
        class: "pa-0",
        sold: "-16%",
        image: "11.png",
        title: "Nike Air Presto",
        price: "$ 175.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image: "12.png",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
    ],
  }),

  created() {
    //this.obtenerItem();
    this.apiAxios();
  },

  methods: {
    //obtenerItem: {},

    apiAxios() {
      axios
        .get("https://api.themoviedb.org/3/movie/popular?", {
          params: {
            api_key: "27136529f26ada5e907f470f8a3a2e42",
            language: "es-MX",
          },
        })
        .then((res) => {
          console.log(res.data.results[1].title);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.container {
  padding: 0px !important;
}
.v-btn.withoutupercase {
  text-decoration: none;
}
.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
</style>
