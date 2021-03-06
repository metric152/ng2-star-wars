/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {};

/** User packages configuration. */
const packages: any = {};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core', '@angular/common', '@angular/compiler', '@angular/http', '@angular/router',
  '@angular/platform-browser', '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app', 'app/shared', 'app/models', 'app/components/sw-container', 'app/components/sw-header',
  'app/components/cards', 'app/components/sw-cards', 'app/components/sw-list',
  'app/components/sw-tags', 'app/components/sw-person', 'app/components/sw-planet',
  'app/components/sw-film', 'app/components/sw-species', 'app/components/sw-vehicle',
  'app/components/sw-starship',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => { cliSystemConfigPackages[barrelName] = {main: 'index'}; });

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {'@angular': 'vendor/@angular', 'rxjs': 'vendor/rxjs', 'main': 'main.js'},
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
