  const FIREBASE_CONFIG_TEST_ENV = {
    
  };
  
  const FIREBASE_CONFIG_PREPROD_ENV = {
    // 
  };
  
  const FIREBASE_CONFIG_PROD_ENV = {
    apiKey: "AIzaSyCL44KCpoJF3RoTufr08H5qhl_m9JsJPJA",
    authDomain: "louis-kredit.firebaseapp.com",
    projectId: "louis-kredit",
    storageBucket: "louis-kredit.firebasestorage.app",
    messagingSenderId: "243513796002",
    appId: "1:243513796002:web:fd20069112d4c679587efb",
    measurementId: "G-E4HZJKQ3YY"
  };
  
  // const FIREBASE_CONFIG_LOCAL_ENV = {
  //   apiKey: "AIzaSyACM4-YRTvUJJoIa8hCUSXPX_FnCNBt_-Y",
  //   authDomain: "civil-array-390609.firebaseapp.com",
  //   databaseURL: "https://civil-array-390609-default-rtdb.firebaseio.com",
  //   projectId: "civil-array-390609",
  //   storageBucket: "civil-array-390609.appspot.com",
  //   messagingSenderId: "834724276047",
  //   appId: "1:834724276047:web:875a0c94f3343f5828873a",
  //   measurementId: "G-ZLPSP8YR76"
  // };
  
  var FIREBASE_CONFIG = {};
  
  if (import.meta.env.VITE_APP_ENVIRONMENT === "production") {
    console.log("PROD ENVIRONMENT");
    FIREBASE_CONFIG = FIREBASE_CONFIG_PROD_ENV;
  } else if (import.meta.env.VITE_APP_ENVIRONMENT === "pre-production") {
    console.log("PRE-PRODUCTION ENVIRONMENT");
    FIREBASE_CONFIG = FIREBASE_CONFIG_PREPROD_ENV;
  }else if (import.meta.env.VITE_APP_ENVIRONMENT === "staging") {
    console.log("STAGING ENVIRONMENT");
    FIREBASE_CONFIG = FIREBASE_CONFIG_TEST_ENV;
  } else {
    console.log("LOCAL ENVIRONMENT");
    FIREBASE_CONFIG = FIREBASE_CONFIG_TEST_ENV;
  }
  
  export default FIREBASE_CONFIG;
  
  
  
  