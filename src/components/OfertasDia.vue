<template>
  <v-row>
    <v-col cols="12" sm="8" class="pr-0">
      <v-card height="250px" tile flat color="#3890D8">
        <v-row>
          <v-col cols="12" sm="4" class="pl-8 pt-5">
            <v-btn color="black" dark class="withoutupercase" small tile>
              new
            </v-btn>
            <h6 class="white--text mt-8">MOUNTAIN BIKE</h6>
            <h3 class="white--text mt-5">Trek Speed Concept</h3>
            <v-btn
              rounded
              color="#4C9CDB"
              dark
              class="withoutupercase px-8 mt-10"
            >
              More Info
            </v-btn>
          </v-col>
          <v-col cols="12" sm="8">
            <v-img
              src="bike.png"
              max-height="400"
              max-width="400"
              contain
              class="mt-n6"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4" class="pl-0">
      <v-card height="250px" tile flat color="#6857E1">
        <v-row>
          <v-col cols="12" sm="6" class="pl-8 pt-5">
            <v-btn color="black" dark class="withoutupercase" small tile>
              new
            </v-btn>
            <h6 class="white--text mt-8">DOWN JACKET</h6>
            <h3 class="white--text mt-5">Sale Collection 2015</h3>
            <v-btn
              rounded
              color="#8375E7"
              dark
              class="withoutupercase px-8 mt-3"
            >
              More Info
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              src="jacket2.png"
              max-height="400"
              max-width="420"
              contain
              class="mt-n2"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
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
