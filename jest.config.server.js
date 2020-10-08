module.exports = {
    roots: ["<rootDir>/__test__/server/"],
    testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
    moduleFileExtensions: ["js", "ts"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/config/fileMock.ts",
        "^@client/(.*)$": "<rootDir>/src/client/$1",
        "^@server/(.*)$": "<rootDir>/src/server/$1",
    },
    coverageDirectory: "coverage/server",
};
