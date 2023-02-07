const config = {
    siteUrl: "https://m3rri.github.io",
    exclude: ["/404", "/about"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/404"],
            },
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
};

module.exports = config;
