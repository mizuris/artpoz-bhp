const withImages = require("next-images");

module.exports = withImages({
  env: {
    MAP_API: "AIzaSyCkGqtJ8LwUUJwIwFHVHIJxbsbMx3tzWF8",
  },
  reactStrictMode: false,
  inlineImageLimit: -1,
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  images: {
    loader: "cloudinary",
  },
});
