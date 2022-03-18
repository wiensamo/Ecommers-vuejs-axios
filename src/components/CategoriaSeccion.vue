<template>
  <v-col cols="3" class="py-0 pr-0 mt-n3">
    <v-card flat outlined tile>
      <v-toolbar flat>
        <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
        <strong>CATEGORIES</strong>
        <v-spacer></v-spacer>
        <v-icon color="grey" small>mdi-close</v-icon>
      </v-toolbar>
      <v-list dense class="mt-n5">
        <v-list-item v-for="style in styles" :key="style.title">
          <v-list-item-content>
            <v-list-item-title
              v-text="style.title"
              class="ml-8"
            ></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-subtitle v-text="style.count"></v-list-item-subtitle>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card flat outlined tile>
      <v-toolbar flat>
        <v-icon color="black" class="mr-2">msi-chevron-down</v-icon>
        <strong>PRICE</strong>
        <v-spacer></v-spacer>
        <v-icon color="grey" small>mdi-close</v-icon>
      </v-toolbar>
      <v-toolbar flat>
        <v-text-field
          placeholder="$50"
          filled
          rounded
          dense
          class="mx-2"
        ></v-text-field>
        <v-text-field
          placeholder="$1900"
          filled
          rounded
          dense
          class="mx-2"
        ></v-text-field>
      </v-toolbar>
      <v-range-slider color="blue" max="40" min="-30"></v-range-slider>
    </v-card>
    <v-card flat outlined tile>
      <v-toolbar flat>
        <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
        <strong>BRAND</strong>
        <v-spacer></v-spacer>
        <v-icon color="grey" small>mdi-close</v-icon>
      </v-toolbar>
      <v-list dense class="mt-n5">
        <v-list-item v-for="brand in brands" :key="brand.title">
          <v-list-item-content>
            <v-list-item-title
              v-text="brand.title"
              class="ml-6"
            ></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-checkbox color="primary" v-model="brand.state"></v-checkbox>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card flat outlined tile>
      <v-toolbar flat>
        <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
        <strong>COLOR</strong>
        <v-spacer></v-spacer>
        <v-icon color="grey" small>mdi-close</v-icon>
      </v-toolbar>
      <v-chip-group column multiple>
        <v-chip
          filter
          outlined
          color="black"
          text-color="black"
          class="ml-2"
        ></v-chip>
        <v-chip filter color="#E6E6E6" text-color="black"></v-chip>
        <v-chip filter color="#FFB500" text-color="white"></v-chip>
        <v-chip filter color="#F27229" text-color="white"> </v-chip>
        <v-chip filter color="#EB3427" text-color="white"> </v-chip>
        <v-chip filter color="#923FA3" text-color="white"> </v-chip>

        <v-chip filter color="#3A51DF" text-color="white" class="ml-2">
        </v-chip>
        <v-chip filter color="#23A7F5" text-color="white"> </v-chip>
        <v-chip filter color="#5EB524" text-color="white"> </v-chip>
        <v-chip filter color="#7C5F4D" text-color="white"> </v-chip>
        <v-chip filter color="black" text-color="white"> </v-chip>
        <v-chip filter color="lime" text-color="white"> </v-chip>
      </v-chip-group>
    </v-card>
    <v-card flat outlined>
      <v-toolbar flat>
        <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
        <strong>SIZE</strong>
        <v-spacer></v-spacer>
        <v-icon color="grey" small>mdi-close</v-icon>
      </v-toolbar>
      <v-chip-group
        column
        multiple
        active-class="blue white--text"
        class="ml-2"
      >
        <v-chip v-for="size in sizes" :key="size" :value="size" class="size">
          {{ size }}
        </v-chip>
      </v-chip-group>
    </v-card>
  </v-col>
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
