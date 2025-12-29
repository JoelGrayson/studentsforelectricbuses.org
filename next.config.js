/** @type {import('next').NextConfig} */

const jredirects=require('./jredirects/dist');
const { withPlausibleProxy }=require('next-plausible');

const nextConfig={
    reactStrictMode: true,
    redirects: jredirects
};

module.exports=withPlausibleProxy()(nextConfig);
