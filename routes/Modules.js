const Modules = [
  {
    route: require("./userRoute.js"),
    path: "/user",
  },
  {
    route: require("./claimRoute.js"),
    path: "/claim",
  },
  {
    route: require("./approveRoute.js"),
    path: "/approve",
  },
];

module.exports = Modules;
