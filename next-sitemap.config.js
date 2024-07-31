const config = {
    siteUrl: "https://m3rri.github.io",
    exclude: ["/404", "/about", "/portfolio"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/404"],
                allow: "/",
            },
        ],
    },
};

module.exports = config;
