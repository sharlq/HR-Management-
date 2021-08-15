
export default {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper:{
        '\\.(css|less|scss|sass$)/':'identity-obj-proxy'
    },
    transform:{ 
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
    },

}

  


