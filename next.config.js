const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: false,
  inlineImageLimit: -1,
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  images: {
    loader: "cloudinary",
  },
});
