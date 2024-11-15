const withNextIntl = require("next-intl/plugin")("./app/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    
};

module.exports = withNextIntl(nextConfig);