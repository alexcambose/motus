module.exports = {
    collectCoverageFrom: [
        "src/**/*",
        "!<rootDir>/node_modules/",
        "!<rootDir>/dist"
    ],
    globals: {
        SVGPathElement: new Function(),
    }
};
