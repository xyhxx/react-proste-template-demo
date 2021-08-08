const CracoAlias = require("craco-alias");

// environment variable
const ENV = process.env.NODE_ENV;
// it is babel config Array
const babelPluginList = [];
// add remove properties in production
// test use date-testid
// this propertis neet to remove in production
const removePlugin = [
  "react-remove-properties",
  {
    "properties": [
      "data-testid"
    ]
  }
];
if (ENV === 'production') {
  babelPluginList.push(removePlugin);
}

module.exports = {
  plugins: [
  　　{
  　　　　plugin: CracoAlias,
  　　　　options: {
  　　　　　　source: "tsconfig",
  　　　　　　baseUrl: "./src",
  　　　　　　tsConfigPath: "./tsconfig.extend.json",
  　　　　}
  　　}
  ],
  babel: {
    plugins: babelPluginList,
  }
}