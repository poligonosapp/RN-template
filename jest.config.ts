/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'
import {defaults} from 'jest-config'
// import type { Promise } from 'es6-promise'

const config: Config = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
};

// export default config;

const Promise = require('es6-promise').Promise;

export default async (): Promise<Config> =>{
  preset: "react-native",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts(x)",
    "!<rootDir>/src/(infrastructure|theme)",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/infrastructure/test.setup.ts"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native-animatable|react-native)/)",
  ],
};
