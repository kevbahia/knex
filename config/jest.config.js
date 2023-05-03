export default {
  verbose: true,
  testEnvironment: 'node',
  roots: [
    '<rootDir>/test'
  ],
  transform: {},
  moduleFileExtensions: [
    'js'
  ],
  moduleNameMapper: {
    '^#src/(.*)$': '<rootDir>/src/$1',
    '^#database/(.*)$': '<rootDir>/src/database/$1',
    '^#routes/(.*)$': '<rootDir>/src/routes/$1',
    '^#controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^#services/(.*)$': '<rootDir>/src/services/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/src/routes/'],
  coverageDirectory: '/tmp',
  coveragePathIgnorePatterns: ['<rootDir>/src/routes/'],
  coverageReporters: [
    'text',
    [
      'cobertura',
      {
        file: 'unit.coverage.xml'
      }
    ]
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '/tmp'
      }
    ]
  ]
}