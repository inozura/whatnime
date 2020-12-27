// Extensions not include generate, agar file selain ini tidak terbuat atau error saat generate file.
require.extensions[(".css", ".png", ".jpeg", ".jpg", ".scss")] = function () {
  return null;
};
//Babel allows us to convert modern js code into backwards compatible versions
//This includes converting jsx into browser-readable code
const es2015 = require("babel-preset-es2015");
const presetReact = require("babel-preset-react");
require("babel-register")({
  presets: [es2015, presetReact],
});
//Import our routes
const router = require("./router").default;
const Sitemap = require("react-router-sitemap").default;
function generateSitemap() {
  return (
    new Sitemap(router())
      .build("http://your-website.com/")
      //Save it wherever you want
      .save("./public/sitemap.xml")
  );
}
generateSitemap();
