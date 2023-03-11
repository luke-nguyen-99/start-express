let whiteListedHosts = [process.env.FRONTEND_HOST];
if (process.env.DEV_ENV == "true") {
  whiteListedHosts.push(undefined);
}
let corsOptions = {
  origin: (origin, callback) => {
    if (whiteListedHosts.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
