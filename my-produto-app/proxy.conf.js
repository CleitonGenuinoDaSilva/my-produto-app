const PROXY_CONFIG = {
  "/api": {
      "target": "https://localhost:8085/rest",
      "secure": false,
      "bypass": function (req, res, proxyOptions) {
          req.headers["Authorization"] = "Basic YWRtaW46MQ";
      }
  }
}

module.exports = PROXY_CONFIG;