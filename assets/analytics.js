(function () {
  var ga4 = window.DEVSURGE_GA4_ID;
  var ads = window.DEVSURGE_GOOGLE_ADS_ID;

  function isConfigured(id, prefix) {
    return typeof id === "string" && id.length > 0 && id.indexOf(prefix) === 0 && id.indexOf("X") === -1;
  }

  var ga4Enabled = isConfigured(ga4, "G-");
  var adsEnabled = isConfigured(ads, "AW-");

  if (!ga4Enabled && !adsEnabled) {
    return;
  }

  var primaryId = ga4Enabled ? ga4 : ads;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  gtag("js", new Date());

  if (ga4Enabled) {
    gtag("config", ga4, { send_page_view: true });
  }

  if (adsEnabled) {
    gtag("config", ads);
  }

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(primaryId);
  document.head.appendChild(script);
})();
