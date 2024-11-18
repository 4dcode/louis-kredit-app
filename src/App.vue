<template>
  <v-app id="inspire" style="background-color: #000;" color="#000">

    <v-navigation-drawer theme="dark" v-model="drawer" style="background-color: #000;border-right: 1px solid #FFF;">
      
      <v-layout>
        <v-btn v-if="$vuetify.display.mobile"
              icon="mdi-window-close"
              variant="plain"
              @click.stop="drawer = !drawer" 
              style="margin-top: -15px;margin-left: -15px"
        >
        </v-btn>
      </v-layout>
      
      <v-img style="cursor: pointer;"
          src="/img/logos/LouisKredit_square.png"
          @click="routerGo('/', $vuetify.display.mobile)"
      ></v-img>


      <v-list density="compact" style="width: 100%" class="py-4">

          <v-btn variant="outlined" 
                 block  
                 color="white" 
                 style="text-transform: none !important;"
                 @click="scrollToTop($vuetify.display.mobile)" 
          >
          {{ lang[getLanguage].HOME }}
          </v-btn>
          <v-btn variant="outlined" 
                 block color="white" 
                 class="mt-4" 
                 style="text-transform: none !important;"
                 @click="scrollToCredit($vuetify.display.mobile)"
          >
            {{ lang[getLanguage].CREDIT }}
          </v-btn>
          <v-btn variant="outlined" 
                 block 
                 color="white" 
                 @click="scrollToAbout($vuetify.display.mobile)"
                 class="mt-4" 
                 style="text-transform: none !important;"
          >
            {{ lang[getLanguage].OUR_SHOP }}
          </v-btn>
          <!-- <v-btn variant="outlined" 
                 block 
                 color="white" 
                 @click="scrollToNFTLaunch($vuetify.display.mobile)"
                 class="mt-4" 
                 style="text-transform: none !important;"
          >
            {{ lang[getLanguage].ABOUT_US }}
          </v-btn> -->
          <v-btn variant="outlined" 
                 block color="white" 
                 class="mt-4" style="text-transform: none !important;"
                 @click="scrollToFooter($vuetify.display.mobile)"
          >
            {{ lang[getLanguage].SOCIAL }}
          </v-btn> 

          <v-btn variant="outlined" 
                 block color="white" 
                 class="mt-4" style="text-transform: none !important;"
          >
          <v-menu offset-y >
            <template v-slot:activator="{ props }"
              ><v-btn
                variant="text"
                style="
                  text-transform: none !important;
                  background-color: unset;
                  box-shadow: none;
                  color: #fff;
                "
                v-bind="props"

              >
              <v-icon small class="mr-md-2" v-if="getLanguage === 'id'">
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="red" d="M472.41 256.42H39.6v-.43c0-119.51 96.89-216.4 216.4-216.4 119.52 0 216.41 96.89 216.41 216.4v.43z"/></g></svg>
                </v-icon>
                
                <v-icon small class="mr-md-2" v-if="getLanguage === 'en'">
                  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="#FEFEFE" d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z"/><path fill="#012169" d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z"/><path fill="#C8102E" d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z"/></g></svg>
                </v-icon>
               
                <v-icon small class="mr-md-2" v-if="getLanguage === 'it'">
                  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.49 124.46-69.28 167.25l-1.19 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.3 0-124.45-26.49-167.24-69.28-42.79-42.79-69.29-101.95-69.29-167.25 0-65.23 26.51-124.38 69.34-167.18C131.55 45.97 190.7 19.48 256 19.48z"/><path fill="#009246" d="M174.15 456.37V55.63C95.2 87.91 39.59 165.44 39.59 255.99c0 90.56 55.61 168.11 134.56 200.38z"/><path fill="#CE2B37" d="M337.88 55.63v400.74c78.93-32.29 134.53-109.84 134.53-200.38 0-90.53-55.6-168.07-134.53-200.36z"/></g></svg>
                </v-icon>

                <span v-if="!isMobileDevice">{{ getLanguage.toUpperCase() }}</span>
                <v-icon right> mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title
                  style="cursor: pointer"
                  @click="changeLanguage('id')"
                  ><v-icon small class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="red" d="M472.41 256.42H39.6v-.43c0-119.51 96.89-216.4 216.4-216.4 119.52 0 216.41 96.89 216.41 216.4v.43z"/></g></svg></v-icon>{{ 'Bahasa' }}</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  style="cursor: pointer"
                  @click="changeLanguage('en')"
                  ><v-icon small class="mr-2"><svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="#FEFEFE" d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z"/><path fill="#012169" d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z"/><path fill="#C8102E" d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z"/></g></svg></v-icon>{{ lang[getLanguage].ENGLISH }}</v-list-item-title
                >
              </v-list-item>
              <!-- <v-list-item>
                <v-list-item-title
                  style="cursor: pointer"
                  @click="changeLanguage('it')"
                  ><v-icon small class="mr-2"><svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.49 124.46-69.28 167.25l-1.19 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.3 0-124.45-26.49-167.24-69.28-42.79-42.79-69.29-101.95-69.29-167.25 0-65.23 26.51-124.38 69.34-167.18C131.55 45.97 190.7 19.48 256 19.48z"/><path fill="#009246" d="M174.15 456.37V55.63C95.2 87.91 39.59 165.44 39.59 255.99c0 90.56 55.61 168.11 134.56 200.38z"/><path fill="#CE2B37" d="M337.88 55.63v400.74c78.93-32.29 134.53-109.84 134.53-200.38 0-90.53-55.6-168.07-134.53-200.36z"/></g></svg></v-icon>{{ lang[getLanguage].ITALIAN }}</v-list-item-title
                >
              </v-list-item> -->
            </v-list>
          </v-menu>
          </v-btn>
          <!-- Beranda
                Kredit
                Toko
                Tentang Kami
                Sosial 
          -->

      </v-list>

    </v-navigation-drawer>

    <!-- style="border-bottom: 1px solid #FFF;" -->
    <v-app-bar  
               theme="dark" 
               :elevation="0" 
               height="80" 
               :color="!scrolled ? 'transparent' : '#000'" 
               style="opacity: 0.8;"
    >

      <v-icon class="ml-4" v-if="drawer" @click="drawer = !drawer" size="50" color="#6fa8dc">mdi-menu-open</v-icon>
      <!-- <v-icon class="ml-4" v-if="drawer" @click="drawer = !drawer" size="50" color="#a2c4c9">mdi-menu</v-icon> -->


        <v-img v-if="!drawer && !$vuetify.display.mobile"  style="margin-left:5px;height:80px;cursor: pointer;"
          src="/img/logos/louiskredit_logo_hx_blue.png"
          @click="routerGoHome('/', $vuetify.display.mobile)"
        ></v-img>

        <v-img v-if="!drawer && $vuetify.display.mobile"  style="margin-left:10px;height:40px;width:220px;cursor: pointer;"
          src="/img/logos/louiskredit_logo_hx_blue.png"
          @click="routerGoHome('/', $vuetify.display.mobile)"
        ></v-img>

        <v-spacer></v-spacer>

        <v-layout v-if="!drawer" style="margin-right:20px">

          <v-spacer></v-spacer>

          <v-btn v-if="!$vuetify.display.mobile"
            variant="text"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="routerGo('/', $vuetify.display.mobile)"
          >
          {{ lang[getLanguage].HOME }}
          </v-btn>

          <v-btn v-if="!$vuetify.display.mobile"
            variant="text"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="scrollToCredit($vuetify.display.mobile)"
          >
           {{ lang[getLanguage].CREDIT }}
          </v-btn>

          <v-btn v-if="!$vuetify.display.mobile"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="scrollToAbout($vuetify.display.mobile)"
          >
           {{ lang[getLanguage].OUR_SHOP }}
          </v-btn>

          <!-- <v-btn v-if="!$vuetify.display.mobile"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="scrollToNFTLaunch($vuetify.display.mobile)"
          >
           {{ lang[getLanguage].ABOUT_US }}
          </v-btn> -->

          <v-btn v-if="!$vuetify.display.mobile"
            variant="text"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="scrollToFooter($vuetify.display.mobile)"
          >
           {{ lang[getLanguage].SOCIAL }}
          </v-btn>

          <v-btn v-if="$vuetify.display.mobile"
                  variant="icon"
                  size="large"
                  @click.stop="drawer = !drawer"
                  color="#87bbff"
        >
          <v-icon size="large">mdi-menu</v-icon>
        </v-btn>

        <v-menu offset-y v-if="!$vuetify.display.mobile">
            <template v-slot:activator="{ props }"
              ><v-btn
                variant="text"
                style="
                  text-transform: none !important;
                  background-color: unset;
                  box-shadow: none;
                  color: #fff;
                "
                v-bind="props"

              >
              <v-icon small class="mr-md-2" v-if="getLanguage === 'id'">
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="red" d="M472.41 256.42H39.6v-.43c0-119.51 96.89-216.4 216.4-216.4 119.52 0 216.41 96.89 216.41 216.4v.43z"/></g></svg>
                </v-icon>
                
                <v-icon small class="mr-md-2" v-if="getLanguage === 'en'">
                  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="#FEFEFE" d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z"/><path fill="#012169" d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z"/><path fill="#C8102E" d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z"/></g></svg>
                </v-icon>
               
                <v-icon small class="mr-md-2" v-if="getLanguage === 'it'">
                  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.49 124.46-69.28 167.25l-1.19 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.3 0-124.45-26.49-167.24-69.28-42.79-42.79-69.29-101.95-69.29-167.25 0-65.23 26.51-124.38 69.34-167.18C131.55 45.97 190.7 19.48 256 19.48z"/><path fill="#009246" d="M174.15 456.37V55.63C95.2 87.91 39.59 165.44 39.59 255.99c0 90.56 55.61 168.11 134.56 200.38z"/><path fill="#CE2B37" d="M337.88 55.63v400.74c78.93-32.29 134.53-109.84 134.53-200.38 0-90.53-55.6-168.07-134.53-200.36z"/></g></svg>
                </v-icon>

                <span v-if="!isMobileDevice">{{ getLanguage.toUpperCase() }}</span>
                <v-icon right> mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title
                  style="cursor: pointer"
                  @click="changeLanguage('id')"
                  ><v-icon small class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="red" d="M472.41 256.42H39.6v-.43c0-119.51 96.89-216.4 216.4-216.4 119.52 0 216.41 96.89 216.41 216.4v.43z"/></g></svg></v-icon>{{ 'Bahasa' }}</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  style="cursor: pointer"
                  @click="changeLanguage('en')"
                  ><v-icon small class="mr-2"><svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="#FEFEFE" d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z"/><path fill="#012169" d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z"/><path fill="#C8102E" d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z"/></g></svg></v-icon>{{ lang[getLanguage].ENGLISH }}</v-list-item-title
                >
              </v-list-item>
              <!-- <v-list-item>
                <v-list-item-title
                  style="cursor: pointer"
                  @click="changeLanguage('it')"
                  ><v-icon small class="mr-2"><svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><g fill-rule="nonzero"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.49 124.46-69.28 167.25l-1.19 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.3 0-124.45-26.49-167.24-69.28-42.79-42.79-69.29-101.95-69.29-167.25 0-65.23 26.51-124.38 69.34-167.18C131.55 45.97 190.7 19.48 256 19.48z"/><path fill="#009246" d="M174.15 456.37V55.63C95.2 87.91 39.59 165.44 39.59 255.99c0 90.56 55.61 168.11 134.56 200.38z"/><path fill="#CE2B37" d="M337.88 55.63v400.74c78.93-32.29 134.53-109.84 134.53-200.38 0-90.53-55.6-168.07-134.53-200.36z"/></g></svg></v-icon>{{ lang[getLanguage].ITALIAN }}</v-list-item-title
                >
              </v-list-item> -->
            </v-list>
          </v-menu>

        </v-layout>

    </v-app-bar>
    

    <v-main>
      <!--  -->
      <router-view :drawer="drawer" :isMobile="isMobileDevice">
      </router-view>
    
    <v-sheet style="background: rgb(135,187,255);background: linear-gradient(180deg, rgba(135,187,255,1) 0%, rgba(0,0,0,1) 100%);" height="10">

    </v-sheet>
    <div id="footer">
      <v-footer
      class="bg-black text-center d-flex flex-column"
        >
        <v-row class="mt-2" :align="'center'" style="width:100%">

          <v-col cols="12" md="3">
          </v-col>

          <v-col cols="12" md="6">

            <div style="text-align: center;">

              <v-tooltip text="Facebook" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn variant="text" 
                         class="mx-2 mt-1"
                         size="large"
                         @click="gotoLink('https://www.facebook.com/louiskredit/')"
                         v-bind="props"
                  >
                  <v-icon size="40">mdi-facebook</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>

              <v-tooltip text="TikTok" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn variant="text" class="mx-1">
                    <v-img 
                      src="/img/icons/tiktok_white.png" 
                      style="width:35px;height:35px;padding-top:4px"
                      @click="gotoLink('https://tiktok.com/louiskredit/')"
                      v-bind="props"
                    />
                  </v-btn>
                </template>
              </v-tooltip>

              <!-- <v-tooltip text="Discord" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn variant="text" class="mx-2 mt-1">
                    <v-img 
                      src="/img/icons/discord.png" 
                      style="width:24px;height:24px;padding-top:4px"
                      @click="gotoLink('https://discord.gg/ZAPN')"
                      v-bind="props"
                    />
                  </v-btn>
                </template>
              </v-tooltip> -->

              <v-tooltip text="Instagram" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="mx-2 mt-1"
                    icon="mdi-instagram"
                    variant="text"
                    size="large"
                    @click="gotoLink('https://www.instagram.com/louiskredit/')"
                    v-bind="props"
                  >
                  <v-icon size="40">mdi-instagram</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
          </v-col>

          <v-col cols="12" md="3">
          </v-col>
          
          </v-row>

          <v-row class="mt-4 mb-1" style="width:100%">
          <v-col cols="12" md="3" :align="'center'">
            <v-img
              src="/img/logos/LouisKredit_square.png"
              style="max-height: 250px; max-width: 164px;"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <div class="pt-4 mb-4 mr-8 ml-8" style="text-align: justify;">
              {{ lang[getLanguage].FOOTER_TEXT }}
            </div>
          </v-col>

          <v-col cols="12" md="3" :align="isMobileDevice ? 'center' : ''" class="pl-4 pt-5">
            <v-btn variant="text" style="font-size: 1rem;text-transform: none !important;" @click="termsDialog = true">
              Terms and Conditions
            </v-btn>
            <v-btn variant="text" style="font-size: 1rem;text-transform: none !important;" @click="privacyDialog = true">
              Privacy Policy
            </v-btn>

          </v-col>
        </v-row>

          <v-divider></v-divider>

          <v-row class="mt-8 mb-1" style="width:100%">
          <v-col cols="12" class="d-flex justify-center" v-if="isMobileDevice">
            <span style="font-size: 16px; color:#FFF;">Copyright &copy;LouisKredit, {{ new Date().getFullYear() }}</span>
          </v-col>
          <v-layout v-if="!isMobileDevice" style="width:100%" class="mr-2 ml-4">
            <span style="font-size: 16px; color:#FFF;">&copy;LouisKredit, {{ new Date().getFullYear() }} </span>
            <v-spacer v-if="!isMobileDevice"></v-spacer>
            <span style="font-size: 16px; color:#FFF;" v-if="!isMobileDevice">
              <v-btn
                variant="text"
                style="color:#FFF;text-transform: none !important;margin-top: -5px;"
                @click="gotoLink('mailto:kreditlouis@gmail.com')">
              <v-icon 
                left
                :color="'white'"
                >mdi-email</v-icon> kreditlouis@gmail.com
              </v-btn>
            </span>
          </v-layout>
        </v-row>
        </v-footer>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { scroller } from 'vue-scrollto/src/scrollTo'
import { isMobile } from 'mobile-device-detect';
export default {
  data: () => ({
      drawer: false,
      isMobileDevice: false,
      currentAppVersion: 'V1.0.12',
      scrolled: false
  }),
  components: {
    // HelloWorld
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
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
  created() {
    window.addEventListener('scroll', this.handleScroll)
    this.scrollToTop()
    this.isMobileDevice = isMobile
  },
  methods: { 
    gotoLink(link) {
      // console.log('button clicked')
      window.open(link, "_blank");
    },
    changeLanguage(lang){
      this.$store.commit('SetCurrentLanguage', lang)

      // Update firebase when logged in
      /* let obj = {
        language: lang,
      };
      if (this.isUserLogin) {
        db.collection('users')
        .doc(this.user.id)
        .update(obj)
        .then(() => {
          console.log('User Account in bucket updated');
          // Snackbar That confirms
          this.$store.commit('SetUserState', {language: lang})
        })
        .catch((error) => {
          console.log(error);
        });
      } */
    },
    routerGo (route, mobile) {
      this.$router.push(route);
      this.scrollToTop(mobile)
      if (mobile) this.drawer = false
    },
    routerGoHome (route, mobile) {
      this.$router.push(route);
      this.scrollToTop(mobile)
      if (this.$route.name === 'Home') this.drawer = !this.drawer
      if (mobile) this.drawer = false
    },
    handleScroll () {
      // console.log(window.scrollY)
      if (window.scrollY > 150 && this.isMobile) {
        this.scrolled = true
      } else if (window.scrollY > 150 && !this.isMobile) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    },
    scrollToTop (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      if (this.$route.name !== 'Home') this.$router.push("/");
      setTimeout(() => {
        firstScrollTo('#home', 500, { offset: 0 });
      }, 200);
      if (mobile) this.drawer = false
    },
    scrollToCredit (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      if (this.$route.name !== 'Home') this.$router.push("/");
      setTimeout(() => {
        firstScrollTo('#credit', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    },
    scrollToAbout (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      if (this.$route.name !== 'Home') this.$router.push("/");
      setTimeout(() => {
        firstScrollTo('#about', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    },
    scrollToCollections (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      setTimeout(() => {
        firstScrollTo('#collections', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    },
    scrollToNFTLaunch (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      setTimeout(() => {
        firstScrollTo('#launch', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    },
    scrollToFooter (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      setTimeout(() => {
        firstScrollTo('#footer', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Cutive+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
#app {
  font-family: 'Exo 2', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
