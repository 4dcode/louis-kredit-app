<template>
    <div id="register">

        <v-img 
            :src="'/img/credit/credit_01.png'"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,0.7)"
        > 
        </v-img>
  
        <v-row :justify="'center'" class="mt-4" v-if="view === 1">
           
            <v-col cols="12" md="8">
                <v-card theme="dark" class="ma-4" color="#000">
                    <p :style="$vuetify.display.mobile ?'font-size: 2rem' : 'font-size: 3.5rem;'">{{ lang[getLanguage].CREDIT_APPLICATION }}</p>
                    <v-form @submit.prevent="submitForm" ref="form" class="mt-4">
                        <h2 class="my-4">{{ lang[getLanguage].CREDIT_ITEM_INFORMATION }}</h2>
                        <v-select
                            v-model="formData.creditType"
                            variant="outlined"
                            :items="creditTypes"
                            :label="lang[getLanguage].ITEM_TO_CREDIT"
                            :placeholder="lang[getLanguage].SELECT_ITEM"
                            :rules="[v => !!v || lang[getLanguage].CHECKOUT_THIS_FIELD_IS_REQUIRED ]"
                        ></v-select>

                        <v-text-field v-if="formData.creditType !== 'Emas' && formData.creditType !== null"
                            v-model="formData.deviceType"
                            variant="outlined"
                            :label="lang[getLanguage].DEVICE_TYPE"
                            :placeholder="formData.creditType === 'iPhone' ? 'iPhone 14, iPhone 15 etc' : formData.creditType === 'Android' ? 'Samsung A55, OPPO etc...' : formData.creditType === 'DLL' ? 'Sofa, Tempat Tidur, Mebel etc'  : 'TV, Koelkas, AC etc...'"
                            :rules="nameRules"
                            required
                        ></v-text-field>
                        

                        <v-select v-if="formData.creditType === 'Emas' && formData.creditType !== null"
                            v-model="formData.goldGram"
                            variant="outlined"
                            :items="goldGrams"
                            label="Emas (Gram)"
                            placeholder="Select grams"
                            :rules="[v => !!v || lang[getLanguage].CHECKOUT_THIS_FIELD_IS_REQUIRED ]"
                        ></v-select>

                        <v-radio-group
                            :label="ANGSURAN"
                            v-model="formData.duration"
                            inline
                            >
                            <v-radio
                                :label="lang[getLanguage].MONTHS_6"
                                value="6"
                            ></v-radio>
                            <v-radio
                                :label="lang[getLanguage].MONTHS_10"
                                value="10"
                            ></v-radio>
                            <v-radio
                                :label="lang[getLanguage].MONTHS_12"
                                value="12"
                            ></v-radio>
                            <v-radio
                                :label="lang[getLanguage].MONTHS_15"
                                value="15"
                            ></v-radio>
                            <v-radio
                                :label="lang[getLanguage].MONTHS_18"
                                value="18"
                            ></v-radio>
                        </v-radio-group>


                    <h2 class="my-4">Personal Information</h2>
                        <v-text-field
                            v-model="formData.name"
                            variant="outlined"
                            :label="lang[getLanguage].APPLICANT_NAME"
                            :rules="nameRules"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="formData.phone"
                            variant="outlined"
                            :label="lang[getLanguage].PHONE_NUMBER"
                            type="tel"
                            :rules="nameRules"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="formData.email"
                            variant="outlined"
                            label="Email"
                            type="email"
                            :rules="emailRules"
                            required
                        ></v-text-field>

                        <v-select
                            v-model="formData.gender"
                            variant="outlined"
                            :items="genders"
                            :label="lang[getLanguage].APPLICANT_GENDER"
                            :placeholder="lang[getLanguage].SELECT_GENDER"
                            :rules="[v => !!v || lang[getLanguage].CHECKOUT_THIS_FIELD_IS_REQUIRED ]"
                        ></v-select>


                        <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                        >
                            <template #activator="{ props }">
                            <v-text-field
                                v-model="formData.dob"
                                readonly
                                :label="lang[getLanguage].APPLICANT_DOB"
                                variant="outlined"
                                dense
                                :rules="[v => !!v || lang[getLanguage].CHECKOUT_THIS_FIELD_IS_REQUIRED]"
                                v-bind="props"
                                @click="menu = true"
                            ></v-text-field>
                            </template>
                            <!-- <v-locale-provider :locale="getLanguage"> -->
                                <v-date-picker
                                    v-model="initDate"
                                    color="primary"
                                    :title="lang[getLanguage].SELECT_DATE"
                                    :header="lang[getLanguage].ENTER_DATE"
                                    show-adjacent-months
                                    @update:model-value="saveDate($event)"
                                    :min="minBirthDate"
                                    :max="maxBirthDate"
                                >
                                </v-date-picker>
                            <!-- </v-locale-provider> -->
                        </v-menu>

                        <h2 class="my-4">{{ lang[getLanguage].ADDRESS_INFORMATION }}</h2>

                        <v-text-field
                            v-model="formData.address1"
                            variant="outlined"
                            :label="lang[getLanguage].APPLICANT_STREET"
                            :rules="nameRules"
                        ></v-text-field>

                        <v-text-field
                            v-model="formData.address2"
                            variant="outlined"
                            :label="lang[getLanguage].APPLICANT_HOUSE_NO"
                            :rules="nameRules"
                        ></v-text-field>

                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formData.subdistrict"
                                    variant="outlined"
                                    :label="lang[getLanguage].APPLICANT_SUBDISTRICT"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formData.district"
                                    variant="outlined"
                                    :label="lang[getLanguage].APPLICANT_DISTRICT"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row style="margin-top:-20px">
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formData.regency"
                                    variant="outlined"
                                    :label="lang[getLanguage].APPLICANT_REGENCY"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formData.province"
                                    variant="outlined"
                                    :label="lang[getLanguage].APPLICANT_PROVINCE"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row style="margin-top:-20px">
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formData.city"
                                    variant="outlined"
                                    :label="lang[getLanguage].APPLICANT_CITY"
                                    :rules="nameRules"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formData.zipcode"
                                    variant="outlined"
                                    :label="lang[getLanguage].APPLICANT_ZIPCODE"
                                    :rules="nameRules"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <h2 class="my-4">Supported Documents</h2>

                        <v-file-input
                            v-model="file1"
                            :show-size="1000"
                            :label="lang[getLanguage].APPLICANT_KTP"
                            placeholder="Select your file"
                            prepend-icon="mdi-camera"
                            variant="outlined"
                            counter
                            hint="Maximal 10MB"
                            persistent-hint
                            :rules="fileRules"
                            required
                            @change="handleFiles"
                        >
                            <template v-slot:selection="{ fileNames }">
                            <template v-for="(fileName, index) in fileNames" :key="fileName">
                                <v-chip
                                v-if="index < 2"
                                class="me-2"
                                size="small"
                                label
                                >
                                {{ fileName }}
                                </v-chip>

                                <span
                                v-else-if="index === 2"
                                class="text-overline text-grey-darken-3 mx-2"
                                >
                                +{{ files.length - 2 }} File(s)
                                </span>
                            </template>
                            </template>
                        </v-file-input>

                        <v-file-input
                            v-model="file2"
                            :show-size="1000"
                            class="mt-4"
                            :label="lang[getLanguage].APPLICANT_KK"
                            placeholder="Select your file"
                            prepend-icon="mdi-file"
                            variant="outlined"
                            counter
                            hint="Maximal 10MB"
                            persistent-hint
                            :rules="fileRules"
                            required
                            @change="handleFiles"
                        >
                            <template v-slot:selection="{ fileNames }">
                            <template v-for="(fileName, index) in fileNames" :key="fileName">
                                <v-chip
                                v-if="index < 2"
                                class="me-2"
                                size="small"
                                label
                                >
                                {{ fileName }}
                                </v-chip>

                                <span
                                v-else-if="index === 2"
                                class="text-overline text-grey-darken-3 mx-2"
                                >
                                +{{ files.length - 2 }} File(s)
                                </span>
                            </template>
                            </template>
                        </v-file-input>

                        <p style="font-size: 1rem;" class="text-center mt-2" v-html="lang[getLanguage].DOC_SKIP_TEXT"></p>

                        <v-textarea v-model="formData.comments"
                                    class="mt-4"
                                    :label="lang[getLanguage].APPLICANT_COMMENTS" 
                                    variant="outlined">
                        </v-textarea>

                        <v-btn color="#70a7dc" 
                            class="px-16 mb-8"
                            size="x-large"
                            @click="submitForm($vuetify.display.mobile)"
                            block
                        >
                            {{ lang[getLanguage].FORM_SUBMIT }}
                        </v-btn>

                        <div style="color: red;" v-html="lang[getLanguage].VALIDATION_FORM_VALID" v-if="!valid && submitted"></div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>

        <!-- ########################### Thank you page ####################################### -->
        <v-row :justify="'center'" class="mt-4" v-if="view === 2">
           
            <v-col cols="12" md="8">
                <v-card theme="dark" class="ma-4" color="#000">
                    <p :style="$vuetify.display.mobile ?'font-size: 1.8rem' : 'font-size: 3rem;'" class="mt-2">{{ lang[getLanguage].THANK_YOU_FOR_SUBMITTING }}</p>

                    <p :style="$vuetify.display.mobile ?'font-size: 1.2rem' : 'font-size: 1.4rem;'" class="mb-8" v-html="lang[getLanguage].THANK_YOU_FOR_SUBMITTING_TEXT"></p>
                </v-card>
            </v-col>

        </v-row>

    </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { scroller } from 'vue-scrollto/src/scrollTo'
// import axios from 'axios'
import dateformat from "dateformat"
import { scroller } from 'vue-scrollto/src/scrollTo'
import { db } from '@/main'

export default {
  name: 'Home',
  props: {
    drawer: Boolean
  },
  data: () => ({
      loadingData: true,
      menu: false,
      valid: false,
      submitted: false,
      view: 1,
      applicationSentDialog: true,
      formData: {
        creditType: null,
        goldGram: null,
        deviceType: '',
        duration: '12',
        name: '',
        phone: '',
        email: '',
        gender: null,
        dob: null,
        street: '',
        no_unit: '',
        subdistrict: '',
        district: '',
        regency: '',
        province: '',
        city: '',
        zipcode: '',
        comments: '', 
      },
      nameRules: [],
      emailRules: [],
      fileRules: [
        value => {
          return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
        }
      ],
      initDate: null,
      file1: [],
      file2: [],
      genders: ['Laki Laki', 'Perempuan', 'Lainnya'],
      creditTypes: ['iPhone', 'Android', 'Emas', 'Electronik', 'DLL'],
      goldGrams: ['5','10', '20']
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
    },
    minBirthDate() {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 100); // 100 years ago

        return date.toISOString().slice(0, 10);
    },
    maxBirthDate() {
        const today = new Date();
        today.setDate(today.getDate() - 1); // yesterday

        return today.toISOString().slice(0, 10);
    }
  },
  watch: {
    getLanguage () {
        if (this.getLanguage === 'id') {
            this.genders = ['Laki Laki', 'Perempuan', 'Lainnya']
        } else {
            this.genders = ['Male', 'Female', 'Other']
        }
    }
  },
  created () {
    this.scrollToTop()
    this.emailRules = [
        v => !!v || this.lang[this.getLanguage].VALIDATION_EMAIL_REQ,
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || this.lang[this.getLanguage].VALIDATION_EMAIL_VALID
    ]
    this.nameRules = [
      v => !!v || this.lang[this.getLanguage].CHECKOUT_THIS_FIELD_IS_REQUIRED,
    ]
    if (this.getLanguage === 'id') {
        this.genders = ['Laki Laki', 'Perempuan', 'Lainnya']
    } else {
        this.genders = ['Male', 'Female', 'Other']
    }
  },
  methods: { 
    async submitForm(mobile) {

        const { valid } = await this.$refs.form.validate()

        if (valid) {
            this.valid = true
            this.submitted = true
            console.log(this.valid)
            await this.createApplicationInFb(mobile)

        } else {
            this.valid = false
            this.submitted = true
            console.log(this.valid)
        }
    },
    handleFiles () {

    },
    async createApplicationInFb (mobile) {
        
        let postkey = db.collection('lk_applications').doc()
        let dispatchObj = {
            id: postkey.id,
            created: new Date().getTime(),
            creditType: this.formData.creditType,
            deviceType: this.formData.deviceType,
            goldGram: this.formData.goldGram,
            duration: this.formData.duration,
            name: this.formData.name,
            phone: this.formData.phone,
            email: this.formData.email,
            gender: this.formData.gender,
            date_of_birth: this.formData.dob,
            address1: this.formData.address1,
            address2: this.formData.address2,
            subdistrict: this.formData.subdistrict,
            district: this.formData.district,
            regency: this.formData.regency,
            province: this.formData.province,
            city: this.formData.city,
            zipcode: this.formData.zipcode,
            comments: this.formData.comments,
            status: 0,
            modified: 0,
            modified_by: ''
        }
        console.log(dispatchObj)
        db.collection('lk_new_applications').doc(postkey.id)
        .set(dispatchObj)
        .then(async () => {
          console.log('Credit Application bucket created')
          this.applicationSentDialog = true

          /* this.uploadTask(this.newPostKey.id, 0).then(() => {
            console.log("Image in bucket created")
          }).catch(error => {
            console.log('Error creating image on uploadTask', error)
            alert(error)
          }); */

          this.clearForm()
          this.scrollToTop(mobile)
          this.view = 2
        })
        .catch(error => {
          alert(error)
          // this.loadingBut = false
          // this.addCatalogItem = false
        })
    },
    clearForm () {
        this.formData.creditType = null
        this.formData.goldGram = null
        this.formData.deviceType = ''
        this.formData.duration = '12'
        this.formData.name = ''
        this.formData.phone = ''
        this.formData.email = ''
        this.formData.gender = null
        this.formData.dob = null
        this.formData.street = ''
        this.formData.no_unit =  ''
        this.formData.subdistrict = ''
        this.formData.district = ''
        this.formData.regency = ''
        this.formData.province = ''
        this.formData.city = ''
        this.formData.zipcode = ''
        this.formData.comments = ''
    },
    saveDate(date) {
        const formattedDate = this.formatDate(date);
        this.formData.dob = formattedDate;
        this.menu = false;
    },
    formatDate(date) {
        if (!date) return '';
        const d = new Date(date);
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();

        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    },
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
    scrollToTop (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      setTimeout(() => {
        firstScrollTo('#register', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    },
    makeDateTime (date) {
      return dateformat(new Date(date), 'UTC:dd mmm, yyyy HH:MM:ss')
    },
    makeTime (date) {
      return dateformat(new Date(date), 'UTC:HH:MM')
    },
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