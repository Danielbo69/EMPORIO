function Whatsapp() {
  window.callbellSettings = {
    token: "QNWYJLT26PKSPJMa5QoWwxBo",
  };
  return (function () {
    var w = window;
    var ic = w.callbell;
    if (typeof ic === "function") {
      ic("reattach_activator");
      // eslint-disable-next-line no-undef
      ic("update", callbellSettings);
    } else {
      var d = document;
      var i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Callbell = i;
      var l = function () {
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src =
          "https://dash.callbell.eu/include/" +
          window.callbellSettings.token +
          ".js";
        var x = d.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      };
      if (w.attachEvent) {
        w.attachEvent("onload", l);
      } else {
        w.addEventListener("load", l, false);
      }
    }
  })();
}

export default Whatsapp;
