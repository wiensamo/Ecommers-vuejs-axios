<template>
  <v-col cols="9" class="mt-n3">
    <v-row>
      <v-col
        cols="1"
        sm="1"
        v-for="(clothe, i) in clothes"
        :key="i"
        :class="clothe.class"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card height="300" align="center" flat outlined tile>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" small dark> algo {{}}</v-btn>
            </v-card-actions>
            <v-img :src="clothe.image" width="200" height="200" contain></v-img>
            <v-card-text class="mt-n4">
              <strong :class="hover ? 'red--text' : 'black--text'">
                {{ titulo }}</strong
              >
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
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import axios from "axios";

export default {
  components: {},

  created() {
    this.getItem(1988);
  },

  methods: {
    async getItem(id) {
      try {
        let items = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?`,
          {
            params: {
              api_key: "27136529f26ada5e907f470f8a3a2e42",
              language: "es-MX",
            },
          }
        );
        this.titulo = await items.data.title;
        console.log(items.data.poster_path);
      } catch (error) {
        console.log(error);
      }
    },
  },

  data: () => ({
    /**
     */
    page: 1,
    items: [],
    titulo: null,
    imgItem: "",

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
