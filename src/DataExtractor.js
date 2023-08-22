var fs = require("fs");
var name = "./run_results.json";
var m = JSON.parse(fs.readFileSync(name).toString());
m.Products.forEach(function (e) {
  delete e.price_url;
  delete e.image_url;
});
fs.writeFileSync(name, JSON.stringify(m));
