/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['lh3.googleusercontent.com', 'ceii-s3.s3.amazonaws.com, www.figma.com', 'res.cloudinary.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};
