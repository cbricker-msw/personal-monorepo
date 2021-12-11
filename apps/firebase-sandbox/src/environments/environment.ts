// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC0NH6en2QZk_mR9BZSdwgE5sRFUb0vSFg",
    authDomain: "sandbox-4df2d.firebaseapp.com",
    projectId: "sandbox-4df2d",
    storageBucket: "sandbox-4df2d.appspot.com",
    messagingSenderId: "834712794018",
    appId: "1:834712794018:web:bed48ca5832fb2c24c38fb",
    measurementId: "${config.measurementId}",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
