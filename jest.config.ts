import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json' // Apunta al archivo tsconfig de test que creaste
        }
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ["**/src/__tests__/**/*.test.[jt]s?(x)"],
};

export default config;
