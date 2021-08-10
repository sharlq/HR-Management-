/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    preset: "ts-jest",
    testEnvironment: 'jsdom',
    globals:{
      "ts-jest":{
        tsconfig: "./tsconfig.jest.json",
      }
    }
}