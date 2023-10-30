// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1Ijoic2VhbmNhaGFsbCIsImEiOiJjbG1tbTJhNmowaTVkMnJuMXM3djhqYWpjIn0.vvqiFeo0SG1dODbPESSb8g'
  },
  api: {
    url: 'https://va-nodejs-api.up.railway.app/api'
  },
  localApi: {
    url: 'http://localhost:3000/api'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
