import { VERSION } from '@angular/core';

export default {
  flags: ['cacheModule', 'cacheComponent', 'cacheDirective', 'cacheProvider', 'correctModuleExports'],
  mockRenderCacheSize: 25,
  neverMockModule: [
    'ApplicationModule',
    'CommonModule',
    'BrowserModule',

    // Angular 16 adds underscores
    '_ApplicationModule',
    '_CommonModule',
    '_BrowserModule',
  ],
  neverMockProvidedFunction: [
    'DomRendererFactory2',
    'EventManager',
    'Injector', // ivy only
    'RendererFactory2',

    // https://github.com/help-me-mom/ng-mocks/issues/538
    'Sanitizer',
    'DomSanitizer',
    'DomSanitizerImpl',

    // ApplicationModule, A14 made them global at root level
    'ApplicationInitStatus',
    'ApplicationRef',
    'Compiler',
    'IterableDiffers',
    'KeyValueDiffers',

    // Angular 16 adds underscores
    '_DomRendererFactory2',
    '_EventManager',
    '_Injector',
    '_Sanitizer',
    '_DomSanitizer',
    '_DomSanitizerImpl',
    '_ApplicationInitStatus',
    '_ApplicationRef',
    '_Compiler',
    '_IterableDiffers',
    '_KeyValueDiffers',
  ],
  neverMockToken: [
    'InjectionToken Set Injector scope.', // INJECTOR_SCOPE // ivy only
    'InjectionToken EventManagerPlugins', // EVENT_MANAGER_PLUGINS
    'InjectionToken HammerGestureConfig', // HAMMER_GESTURE_CONFIG

    // ApplicationModule, A14 made them global at root level
    'InjectionToken AppId', // APP_ID
    'InjectionToken DefaultCurrencyCode', // DEFAULT_CURRENCY_CODE
    'InjectionToken LocaleId', // LOCALE_ID
    'InjectionToken SCHEDULER_TOKEN', // SCHEDULER
  ],
  onMockBuilderMissingDependency: 'throw',
  onMockInstanceRestoreNeed: 'warn',
  onTestBedFlushNeed: 'warn',
  defaultStandalone: Number.parseInt(VERSION.major, 10) >= 19,

  dependencies: [
    'declarations',
    'hostDirectives',
    'entryComponents',
    'bootstrap',
    'providers',
    'viewProviders',
    'imports',
    'exports',
  ] as const,
};
