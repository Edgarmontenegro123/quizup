import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(swiper|ssr-window|dom7)/)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ["**/src/**/*.test.[jt]s?(x)"],
};

export default config;

