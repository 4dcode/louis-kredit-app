<template>
  <div id="home">

    <v-row :style="$vuetify.display.mobile ?  'margin-top:-110px' : 'margin-top:-100px'">
      
      <v-img v-if="!$vuetify.display.mobile"
        :src="'/img/home/lk_home_01.png'"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.1)"
      > 
          <v-row class="mx-16">
            <v-col cols="12" class="mb-16">
                <v-card class="pa-2 ma-2" color="transparent" elevation="0">
                    <!-- <div class="text-h4 text-center font-weight-bold text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">{{  lang[getLanguage].EASY_CREDIT_SERVICES }}</div>
                    <div class="text-h5 text-center font-weight-medium  text-white mt-4" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">{{ lang[getLanguage].HOME_TEXT }}</div> -->
                </v-card>
                <v-btn color="#c7dedb" 
                       dark variant="flat" 
                       size="x-large" 
                       style="text-transform: none !important;opacity:0.9" 
                       class="mb-8 px-16" 
                       to="/register"
                  >
                  <v-icon class="mr-2">mdi-square-edit-outline</v-icon>
                  {{ lang[getLanguage].REGISTER_NOW }}
                </v-btn>
            </v-col>
        </v-row>
      </v-img>
  
      <v-img v-if="$vuetify.display.mobile"
        :src="'/img/home/hs_home_mobile_0.png'"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)"
      >
        <v-row class="mb-2">
            <v-col cols="12" class="mb-4">
                <!-- <v-card class="pa-2 ma-2" color="transparent" elevation="0">
                    <div class="text-h5 text-center font-weight-bold text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">NFT SALE OPENS 0N</div>
                    <div class="text-h5 text-center font-weight-bold  text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">02 APRIL, 2024 - 10:00 UTC</div>
                </v-card> -->
                <v-btn color="#c7dedb" 
                       variant="flat" 
                       size="x-large" 
                       style="text-transform: none !important;opacity:0.9;width:90%"
                       class="mb-2" 
                       to="/register"
                  >
                  <v-icon class="mr-2">mdi-square-edit-outline</v-icon>
                  {{ lang[getLanguage].REGISTER_NOW }}
                </v-btn>
            </v-col>
        </v-row>
      </v-img>

    </v-row>

  </div>

  <div id="credit" >

    <v-row :class="$vuetify.display.mobile ? 'ma-2 mt-16' : 'ma-16'">
     
      <v-card theme="dark" 
              width="100%"
              class="mt-8"
              :min-height="drawer ? 370 : 450"
              color="#000"
              style="border: 1px solid white"
      >

        <v-row :align="'center'">

          <v-col cols="12" md="6" :align="'center'">
            
            <v-img 
              :src="'/img/home/hs_story_01.png'"
              class="align-end"
            >
            <v-row class="mb-2" v-if="!$vuetify.display.mobile">
                  <v-col cols="12" class="mb-2">
                      <!-- <v-card class="pa-2 ma-2" color="transparent" elevation="0">
                          <div class="text-h5 text-center font-weight-bold text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">NFT SALE OPENS 0N</div>
                          <div class="text-h5 text-center font-weight-bold  text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">02 APRIL, 2024 - 10:00 UTC</div>
                      </v-card> -->
                      <v-btn color="#70a7dc" 
                            variant="flat" 
                            size="x-large" 
                            style="text-transform: none !important;opacity:0.9;width:90%;color:#000"
                            class="mb-2" 
                            to="/register"
                        >
                        <v-icon class="mr-2">mdi-square-edit-outline</v-icon>
                        {{ lang[getLanguage].REGISTER_NOW }}
                      </v-btn>
                  </v-col>
              </v-row>
            </v-img>

          </v-col>

          <v-col cols="12" md="6" :align="'left'" class="pa-8">

            <p style="font-size:1.5rem;font-weight:bold">{{ lang[getLanguage].EASY_CREDIT_SERVICES }}</p>
            <p class="pt-4" :style="drawer ? 'font-size:1.2rem;' : 'font-size:1.3rem;'" v-html="lang[getLanguage].HOME_TEXT"></p>

          </v-col>

        </v-row>

        <v-row class="mb-2 mt-4" v-if="$vuetify.display.mobile">
            <v-col cols="12" class="mb-2">
                <!-- <v-card class="pa-2 ma-2" color="transparent" elevation="0">
                    <div class="text-h5 text-center font-weight-bold text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">NFT SALE OPENS 0N</div>
                    <div class="text-h5 text-center font-weight-bold  text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">02 APRIL, 2024 - 10:00 UTC</div>
                </v-card> -->
                <v-btn color="#70a7dc" 
                      variant="flat" 
                      size="x-large" 
                      style="text-transform: none !important;opacity:0.9;width:90%;color:#000"
                      class="mb-2" 
                      to="/register"
                  >
                  <v-icon class="mr-2">mdi-square-edit-outline</v-icon>
                  {{ lang[getLanguage].REGISTER_NOW }}
                </v-btn>
            </v-col>
        </v-row>

      </v-card>
    </v-row>
  </div>
  <div id="about" >
    <v-row :class="$vuetify.display.mobile ? 'ma-2 mt-16 mb-8' : 'mx-16 mt-4 mb-16'">
     
     <v-card theme="dark" 
             width="100%"
             class="mt-4"
             :min-height="drawer ? 370 : 450"
             color="#000"
             style="border: 1px solid white"
     >

       <v-row :align="'center'">

         <v-col cols="12" md="7" :align="'left'" class="pa-8 order-last order-md-first">

           <p style="font-size:1.5rem;font-weight:bold">{{ lang[getLanguage].OUR_SHOP.toUpperCase() }}</p>
           <p class="pt-4" :style="drawer ? 'font-size:1.2rem;' : 'font-size:1.2rem;'" v-html="lang[getLanguage].TOKO_KAMI_TEXT"></p>

           <p class="pt-4" :style="drawer ? 'font-size:1.2rem;' : 'font-size:1.2rem;'" v-html="lang[getLanguage].TOKO_ADDRESS"></p>
         </v-col>

         <v-col cols="12" md="5" :align="'center'" :justify="'center'">
           
           <v-img 
             src="/img/home/lk_about_02.png"
           ></v-img>

         </v-col>

       </v-row>

     </v-card>
   </v-row>

  </div>

  <!-- <div id="collections" class="pb-16" style="background: rgb(69,69,69);background: linear-gradient(180deg, rgba(69,69,69,1) 0%, rgba(0,0,0,1) 100%);">

    <v-row :class="$vuetify.display.mobile ? 'ma-2' : 'ma-4'">
      <v-col :align="'center'">
        <p style="font-size:3rem;font-weight:bold;color:#FFF">NFT Collections</p>
        <p style="font-size:1.5rem;color:#FFF;margin-left:10%;margin-right: 10%;">Welcome to a world where art transcends boundaries and imagination knows no limits. Our collections represent a journey into the ethereal realms of creativity, 
          where each piece tells a story and evokes emotions beyond the tangible. Explore a diverse range of artworks curated to inspire, provoke thought, and stir the soul.
        </p>
      </v-col>
    </v-row>

    <v-btn-toggle v-if="!$vuetify.display.mobile"
      v-model="collectionToggle"
      color="indigo-darken-4"
      rounded="0"
      group
    >
      <v-btn value="Infinity" size="large">
        Infinity
      </v-btn>

      <v-btn value="Harmonic Gateways" size="large">
        Harmonic Gateways
      </v-btn>

      <v-btn value="Infinity's Echo" size="large">
        Infinity's Echo
      </v-btn>

    </v-btn-toggle>

    <v-btn-toggle v-if="$vuetify.display.mobile"
      v-model="collectionToggle"
      style="height:140px;flex-direction: column;"
      color="indigo-darken-4"
      group
    >
      <v-btn value="Infinity" size="x-large" style="border-radius: 10px;height:35px">
        Infinity
      </v-btn>

      <v-btn value="Harmonic Gateways" size="x-large" class="mt-2" style="border-radius: 10px;height:35px">
        Harmonic Gateways
      </v-btn>

      <v-btn value="Infinity's Echo" size="x-large" class="mt-2" style="border-radius: 10px;height:35px">
        Infinity's Echo
      </v-btn>

    </v-btn-toggle>

    <p class="text-h4 text-white text-center ma-2">{{ collectionToggle }}</p>
    
    <v-row :justify="'center'">
      <v-col cols="12" md="6" :align="'center'">
        <v-carousel show-arrows="hover"
                    :height="$vuetify.display.mobile ? 300 : 500"
                    hide-delimiters
        >
          <v-carousel-item v-for="(item, index) in carouselItems">
            <v-card :height="$vuetify.display.mobile ? 300 : 500" 
                    :width="$vuetify.display.mobile ? 300 : collectionToggle === 'Infinity\'s Echo' ? 750 : 500" 
                    :class="collectionToggle === 'Infinity' ? 'pa-6 box' : collectionToggle === 'Harmonic Gateways' ? 'pa-6 box_2' : 'pa-6 box_3'">
              <v-img :src="item.src">
              </v-img>
              <p class="text-white">{{  item.name }}</p>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row :justify="'center'" v-if="collectionToggle === 'Infinity'">
      <v-col cols="12" md="12" :align="'center'">
        <p style="font-size:3rem;font-weight:bold;color:#FFF">What is behind the Infinity tale?</p>
        <p :style="$vuetify.display.mobile ? 'font-size:1.5rem;color:#FFF;margin-left:5%;margin-right: 5%;' : 'font-size:1.5rem;color:#FFF;margin-left:10%;margin-right: 10%;'">
          Behind the tale of the Infinity NFT Collection lies a rich tapestry of creativity, innovation, and exploration. At its core, the Infinity NFT Collection is a manifestation of the human desire to transcend boundaries and venture into the unknown. It represents a journey into the infinite expanse of imagination, where every artwork is a portal to new worlds waiting to be discovered.<br><br>
          The tale of the Infinity NFT Collection is rooted in the belief that art has the power to inspire, provoke thought, and evoke emotion. It is a testament to the boundless potential of digital art and the transformative impact of technology on the creative process.<br><br>
          Behind the scenes, the Infinity NFT Collection is a labor of love, crafted by a team of visionary artists, technologists, and storytellers who are passionate about pushing the boundaries of what is possible. Each artwork in the collection is carefully curated to captivate the imagination and transport viewers to new realms of possibility.<br><br>
          But beyond the art itself, the Infinity NFT Collection is also a story of community and connection. It is a platform for artists and collectors to come together, to share their passion for creativity, and to celebrate the diversity of human expression.<br><br>
          Ultimately, the tale of the Infinity NFT Collection is one of infinite possibility. It is a reminder that in a world where the only limit is the limits of our own imagination, the journey is just beginning, and the possibilities are endless.        
        </p>
      </v-col>
    </v-row>

  </div> -->


  <div id="launch" class="pb-16" style="background: rgb(69,69,69);background: linear-gradient(180deg, rgba(69,69,69,1) 0%, rgba(0,0,0,1) 100%);">
    
    <v-row :class="$vuetify.display.mobile ? 'ma-2' : 'mx-16'">
      <v-col :align="'center'">
        <p style="font-size:3rem;font-weight:bold;color:#FFF">{{ lang[getLanguage].INFORMATION_NEW}}</p>
      </v-col>
    </v-row>
    <v-row :class="$vuetify.display.mobile ? 'ma-2' : 'mx-16'">
      <v-col :align="'center'">
        <p style="font-size:1.5rem;color:#FFF" v-html="lang[getLanguage].INFORMATION_NEW_TEXT"></p>

        <v-btn color="#70a7dc" 
              variant="flat" 
              size="x-large" 
              style="text-transform: none !important;opacity:0.9;width:50%;color:#000"
              class="mb-2 mt-12" 
              to="/register"
          >
          <v-icon class="mr-2">mdi-square-edit-outline</v-icon>
          {{ lang[getLanguage].REGISTER_NOW }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row :class="$vuetify.display.mobile ? 'ma-4' : 'ma-4'">

    </v-row>
  
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { scroller } from 'vue-scrollto/src/scrollTo'
// import axios from 'axios'
import dateformat from "dateformat"

export default {
  name: 'Home',
  props: {
    drawer: Boolean
  },
  data: () => ({
      loadingData: true,
      tokenDetails: [],
      symbol: 'ZAPM',
      deployBlocktime: 0,
      totalMinted: 0,
  }),
  components: {
    // HelloWorld
  },
  computed: {
    lang (){
      return this.$store.state.lang;
    },
    getLanguage (){
      return this.$store.state.current_language
    }
  },
  watch: {
    
  },
  created () {
    // this.scrollToTop()
    // this.getUnisatTokenData()
    this.carouselItems = this.infinity
    this.randomHome = Math.floor(Math.random() * 3);
  },
  methods: { 
    goToLink (link) {
      window.open(link, "_blank");
    },
    numberWithCommas (x) {
        console.log()
        x = parseInt(x)
        x = x.toString()
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    },
    makeDateTime (date) {
      return dateformat(new Date(date), 'UTC:dd mmm, yyyy HH:MM:ss')
    },
    makeTime (date) {
      return dateformat(new Date(date), 'UTC:HH:MM')
    }
  }
}
</script>

<style>
.box {
  border-radius: 10px !important; /*1*/
  border: 10px solid transparent; /*2*/
  background: linear-gradient(45deg,#454545,#87bbff) border-box !important; /*3*/
  -webkit-mask-composite: xor; /*5'*/
          mask-composite: exclude; /*5*/
}

.box_2 {
  border-radius: 10px !important; /*1*/
  border: 10px solid transparent; /*2*/
  background: linear-gradient(45deg,#454545,#51200b) border-box !important; /*3*/
  -webkit-mask-composite: xor; /*5'*/
          mask-composite: exclude; /*5*/
}

.box_3 {
  border-radius: 10px !important; /*1*/
  border: 10px solid transparent; /*2*/
  background: linear-gradient(45deg,#454545,#360b51) border-box !important; /*3*/
  -webkit-mask-composite: xor; /*5'*/
          mask-composite: exclude; /*5*/
}
</style>
