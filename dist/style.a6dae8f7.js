// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\GeogrotesqueCyr-SemiBold.eot":[["GeogrotesqueCyr-SemiBold.6dc14ff8.eot","fonts/GeogrotesqueCyr-SemiBold.eot"],"fonts/GeogrotesqueCyr-SemiBold.eot"],"./..\\fonts\\GeogrotesqueCyr-SemiBold.woff2":[["GeogrotesqueCyr-SemiBold.5669d2f1.woff2","fonts/GeogrotesqueCyr-SemiBold.woff2"],"fonts/GeogrotesqueCyr-SemiBold.woff2"],"./..\\fonts\\GeogrotesqueCyr-SemiBold.woff":[["GeogrotesqueCyr-SemiBold.b2dc47e9.woff","fonts/GeogrotesqueCyr-SemiBold.woff"],"fonts/GeogrotesqueCyr-SemiBold.woff"],"./..\\fonts\\GeogrotesqueCyr-SemiBold.ttf":[["GeogrotesqueCyr-SemiBold.502c3fe7.ttf","fonts/GeogrotesqueCyr-SemiBold.ttf"],"fonts/GeogrotesqueCyr-SemiBold.ttf"],"./..\\fonts\\GeogrotesqueCyr-ExtraLight.eot":[["GeogrotesqueCyr-ExtraLight.f86bb765.eot","fonts/GeogrotesqueCyr-ExtraLight.eot"],"fonts/GeogrotesqueCyr-ExtraLight.eot"],"./..\\fonts\\GeogrotesqueCyr-ExtraLight.woff2":[["GeogrotesqueCyr-ExtraLight.9c9c47eb.woff2","fonts/GeogrotesqueCyr-ExtraLight.woff2"],"fonts/GeogrotesqueCyr-ExtraLight.woff2"],"./..\\fonts\\GeogrotesqueCyr-ExtraLight.woff":[["GeogrotesqueCyr-ExtraLight.f7496cc6.woff","fonts/GeogrotesqueCyr-ExtraLight.woff"],"fonts/GeogrotesqueCyr-ExtraLight.woff"],"./..\\fonts\\GeogrotesqueCyr-ExtraLight.ttf":[["GeogrotesqueCyr-ExtraLight.db13290d.ttf","fonts/GeogrotesqueCyr-ExtraLight.ttf"],"fonts/GeogrotesqueCyr-ExtraLight.ttf"],"./..\\fonts\\GeogrotesqueCyr-Italic.eot":[["GeogrotesqueCyr-Italic.44aa014f.eot","fonts/GeogrotesqueCyr-Italic.eot"],"fonts/GeogrotesqueCyr-Italic.eot"],"./..\\fonts\\GeogrotesqueCyr-Italic.woff2":[["GeogrotesqueCyr-Italic.98381a20.woff2","fonts/GeogrotesqueCyr-Italic.woff2"],"fonts/GeogrotesqueCyr-Italic.woff2"],"./..\\fonts\\GeogrotesqueCyr-Italic.woff":[["GeogrotesqueCyr-Italic.9dd7b1ec.woff","fonts/GeogrotesqueCyr-Italic.woff"],"fonts/GeogrotesqueCyr-Italic.woff"],"./..\\fonts\\GeogrotesqueCyr-Italic.ttf":[["GeogrotesqueCyr-Italic.474723b6.ttf","fonts/GeogrotesqueCyr-Italic.ttf"],"fonts/GeogrotesqueCyr-Italic.ttf"],"./..\\fonts\\GeogrotesqueCyr-ExtLtIta.eot":[["GeogrotesqueCyr-ExtLtIta.845b52d8.eot","fonts/GeogrotesqueCyr-ExtLtIta.eot"],"fonts/GeogrotesqueCyr-ExtLtIta.eot"],"./..\\fonts\\GeogrotesqueCyr-ExtLtIta.woff2":[["GeogrotesqueCyr-ExtLtIta.51d52055.woff2","fonts/GeogrotesqueCyr-ExtLtIta.woff2"],"fonts/GeogrotesqueCyr-ExtLtIta.woff2"],"./..\\fonts\\GeogrotesqueCyr-ExtLtIta.woff":[["GeogrotesqueCyr-ExtLtIta.6854ded1.woff","fonts/GeogrotesqueCyr-ExtLtIta.woff"],"fonts/GeogrotesqueCyr-ExtLtIta.woff"],"./..\\fonts\\GeogrotesqueCyr-ExtLtIta.ttf":[["GeogrotesqueCyr-ExtLtIta.1c4d0b63.ttf","fonts/GeogrotesqueCyr-ExtLtIta.ttf"],"fonts/GeogrotesqueCyr-ExtLtIta.ttf"],"./..\\fonts\\GeogrotesqueCyr-BoldItalic.eot":[["GeogrotesqueCyr-BoldItalic.ad4aa97d.eot","fonts/GeogrotesqueCyr-BoldItalic.eot"],"fonts/GeogrotesqueCyr-BoldItalic.eot"],"./..\\fonts\\GeogrotesqueCyr-BoldItalic.woff2":[["GeogrotesqueCyr-BoldItalic.6924a94e.woff2","fonts/GeogrotesqueCyr-BoldItalic.woff2"],"fonts/GeogrotesqueCyr-BoldItalic.woff2"],"./..\\fonts\\GeogrotesqueCyr-BoldItalic.woff":[["GeogrotesqueCyr-BoldItalic.f58aa70b.woff","fonts/GeogrotesqueCyr-BoldItalic.woff"],"fonts/GeogrotesqueCyr-BoldItalic.woff"],"./..\\fonts\\GeogrotesqueCyr-BoldItalic.ttf":[["GeogrotesqueCyr-BoldItalic.c89ed3fb.ttf","fonts/GeogrotesqueCyr-BoldItalic.ttf"],"fonts/GeogrotesqueCyr-BoldItalic.ttf"],"./..\\fonts\\GeogrotesqueCyr-Light.eot":[["GeogrotesqueCyr-Light.f5acde89.eot","fonts/GeogrotesqueCyr-Light.eot"],"fonts/GeogrotesqueCyr-Light.eot"],"./..\\fonts\\GeogrotesqueCyr-Light.woff2":[["GeogrotesqueCyr-Light.07e5217c.woff2","fonts/GeogrotesqueCyr-Light.woff2"],"fonts/GeogrotesqueCyr-Light.woff2"],"./..\\fonts\\GeogrotesqueCyr-Light.woff":[["GeogrotesqueCyr-Light.90e96cf2.woff","fonts/GeogrotesqueCyr-Light.woff"],"fonts/GeogrotesqueCyr-Light.woff"],"./..\\fonts\\GeogrotesqueCyr-Light.ttf":[["GeogrotesqueCyr-Light.e169883b.ttf","fonts/GeogrotesqueCyr-Light.ttf"],"fonts/GeogrotesqueCyr-Light.ttf"],"./..\\fonts\\GeogrotesqueCyr-ThinItalic.eot":[["GeogrotesqueCyr-ThinItalic.c2ace881.eot","fonts/GeogrotesqueCyr-ThinItalic.eot"],"fonts/GeogrotesqueCyr-ThinItalic.eot"],"./..\\fonts\\GeogrotesqueCyr-ThinItalic.woff2":[["GeogrotesqueCyr-ThinItalic.24d1a022.woff2","fonts/GeogrotesqueCyr-ThinItalic.woff2"],"fonts/GeogrotesqueCyr-ThinItalic.woff2"],"./..\\fonts\\GeogrotesqueCyr-ThinItalic.woff":[["GeogrotesqueCyr-ThinItalic.fe5de1d5.woff","fonts/GeogrotesqueCyr-ThinItalic.woff"],"fonts/GeogrotesqueCyr-ThinItalic.woff"],"./..\\fonts\\GeogrotesqueCyr-ThinItalic.ttf":[["GeogrotesqueCyr-ThinItalic.38d10629.ttf","fonts/GeogrotesqueCyr-ThinItalic.ttf"],"fonts/GeogrotesqueCyr-ThinItalic.ttf"],"./..\\fonts\\GeogrotesqueCyr-Medium.eot":[["GeogrotesqueCyr-Medium.66fbb9bb.eot","fonts/GeogrotesqueCyr-Medium.eot"],"fonts/GeogrotesqueCyr-Medium.eot"],"./..\\fonts\\GeogrotesqueCyr-Medium.woff2":[["GeogrotesqueCyr-Medium.4cd9fbba.woff2","fonts/GeogrotesqueCyr-Medium.woff2"],"fonts/GeogrotesqueCyr-Medium.woff2"],"./..\\fonts\\GeogrotesqueCyr-Medium.woff":[["GeogrotesqueCyr-Medium.69790867.woff","fonts/GeogrotesqueCyr-Medium.woff"],"fonts/GeogrotesqueCyr-Medium.woff"],"./..\\fonts\\GeogrotesqueCyr-Medium.ttf":[["GeogrotesqueCyr-Medium.ae7f054b.ttf","fonts/GeogrotesqueCyr-Medium.ttf"],"fonts/GeogrotesqueCyr-Medium.ttf"],"./..\\fonts\\GeogrotesqueCyr-Bold.eot":[["GeogrotesqueCyr-Bold.7e1d8e7c.eot","fonts/GeogrotesqueCyr-Bold.eot"],"fonts/GeogrotesqueCyr-Bold.eot"],"./..\\fonts\\GeogrotesqueCyr-Bold.woff2":[["GeogrotesqueCyr-Bold.428de5a9.woff2","fonts/GeogrotesqueCyr-Bold.woff2"],"fonts/GeogrotesqueCyr-Bold.woff2"],"./..\\fonts\\GeogrotesqueCyr-Bold.woff":[["GeogrotesqueCyr-Bold.6c1308cf.woff","fonts/GeogrotesqueCyr-Bold.woff"],"fonts/GeogrotesqueCyr-Bold.woff"],"./..\\fonts\\GeogrotesqueCyr-Bold.ttf":[["GeogrotesqueCyr-Bold.77688f2d.ttf","fonts/GeogrotesqueCyr-Bold.ttf"],"fonts/GeogrotesqueCyr-Bold.ttf"],"./..\\fonts\\GeogrotesqueCyr-Thin.eot":[["GeogrotesqueCyr-Thin.5e0f87e8.eot","fonts/GeogrotesqueCyr-Thin.eot"],"fonts/GeogrotesqueCyr-Thin.eot"],"./..\\fonts\\GeogrotesqueCyr-Thin.woff2":[["GeogrotesqueCyr-Thin.96f0ac1c.woff2","fonts/GeogrotesqueCyr-Thin.woff2"],"fonts/GeogrotesqueCyr-Thin.woff2"],"./..\\fonts\\GeogrotesqueCyr-Thin.woff":[["GeogrotesqueCyr-Thin.afc5573d.woff","fonts/GeogrotesqueCyr-Thin.woff"],"fonts/GeogrotesqueCyr-Thin.woff"],"./..\\fonts\\GeogrotesqueCyr-Thin.ttf":[["GeogrotesqueCyr-Thin.6e7368ee.ttf","fonts/GeogrotesqueCyr-Thin.ttf"],"fonts/GeogrotesqueCyr-Thin.ttf"],"./..\\fonts\\GeogrotesqueCyr-SemBdIta.eot":[["GeogrotesqueCyr-SemBdIta.bc36606f.eot","fonts/GeogrotesqueCyr-SemBdIta.eot"],"fonts/GeogrotesqueCyr-SemBdIta.eot"],"./..\\fonts\\GeogrotesqueCyr-SemBdIta.woff2":[["GeogrotesqueCyr-SemBdIta.f513cd59.woff2","fonts/GeogrotesqueCyr-SemBdIta.woff2"],"fonts/GeogrotesqueCyr-SemBdIta.woff2"],"./..\\fonts\\GeogrotesqueCyr-SemBdIta.woff":[["GeogrotesqueCyr-SemBdIta.7b5d66d7.woff","fonts/GeogrotesqueCyr-SemBdIta.woff"],"fonts/GeogrotesqueCyr-SemBdIta.woff"],"./..\\fonts\\GeogrotesqueCyr-SemBdIta.ttf":[["GeogrotesqueCyr-SemBdIta.a635bafc.ttf","fonts/GeogrotesqueCyr-SemBdIta.ttf"],"fonts/GeogrotesqueCyr-SemBdIta.ttf"],"./..\\fonts\\GeogrotesqueCyr-Regular.eot":[["GeogrotesqueCyr-Regular.bbe21464.eot","fonts/GeogrotesqueCyr-Regular.eot"],"fonts/GeogrotesqueCyr-Regular.eot"],"./..\\fonts\\GeogrotesqueCyr-Regular.woff2":[["GeogrotesqueCyr-Regular.402541b2.woff2","fonts/GeogrotesqueCyr-Regular.woff2"],"fonts/GeogrotesqueCyr-Regular.woff2"],"./..\\fonts\\GeogrotesqueCyr-Regular.woff":[["GeogrotesqueCyr-Regular.1a3dc689.woff","fonts/GeogrotesqueCyr-Regular.woff"],"fonts/GeogrotesqueCyr-Regular.woff"],"./..\\fonts\\GeogrotesqueCyr-Regular.ttf":[["GeogrotesqueCyr-Regular.5c53cfc5.ttf","fonts/GeogrotesqueCyr-Regular.ttf"],"fonts/GeogrotesqueCyr-Regular.ttf"],"./..\\fonts\\GeogrotesqueCyr-MediumItalic.eot":[["GeogrotesqueCyr-MediumItalic.11a23d87.eot","fonts/GeogrotesqueCyr-MediumItalic.eot"],"fonts/GeogrotesqueCyr-MediumItalic.eot"],"./..\\fonts\\GeogrotesqueCyr-MediumItalic.woff2":[["GeogrotesqueCyr-MediumItalic.2e906b7b.woff2","fonts/GeogrotesqueCyr-MediumItalic.woff2"],"fonts/GeogrotesqueCyr-MediumItalic.woff2"],"./..\\fonts\\GeogrotesqueCyr-MediumItalic.woff":[["GeogrotesqueCyr-MediumItalic.55644ff4.woff","fonts/GeogrotesqueCyr-MediumItalic.woff"],"fonts/GeogrotesqueCyr-MediumItalic.woff"],"./..\\fonts\\GeogrotesqueCyr-MediumItalic.ttf":[["GeogrotesqueCyr-MediumItalic.27a3d50a.ttf","fonts/GeogrotesqueCyr-MediumItalic.ttf"],"fonts/GeogrotesqueCyr-MediumItalic.ttf"],"./..\\fonts\\GeogrotesqueCyr-LightItalic.eot":[["GeogrotesqueCyr-LightItalic.16dc5c8c.eot","fonts/GeogrotesqueCyr-LightItalic.eot"],"fonts/GeogrotesqueCyr-LightItalic.eot"],"./..\\fonts\\GeogrotesqueCyr-LightItalic.woff2":[["GeogrotesqueCyr-LightItalic.3770df5c.woff2","fonts/GeogrotesqueCyr-LightItalic.woff2"],"fonts/GeogrotesqueCyr-LightItalic.woff2"],"./..\\fonts\\GeogrotesqueCyr-LightItalic.woff":[["GeogrotesqueCyr-LightItalic.69029637.woff","fonts/GeogrotesqueCyr-LightItalic.woff"],"fonts/GeogrotesqueCyr-LightItalic.woff"],"./..\\fonts\\GeogrotesqueCyr-LightItalic.ttf":[["GeogrotesqueCyr-LightItalic.e24135ed.ttf","fonts/GeogrotesqueCyr-LightItalic.ttf"],"fonts/GeogrotesqueCyr-LightItalic.ttf"],"./..\\img\\servicios\\svg\\auto.svg":[["auto.9d8d4f5d.svg","img/servicios/svg/auto.svg"],"img/servicios/svg/auto.svg"],"./..\\img\\servicios\\svg\\moto.svg":[["moto.bba2d8bd.svg","img/servicios/svg/moto.svg"],"img/servicios/svg/moto.svg"],"./..\\img\\servicios\\svg\\bici.svg":[["bici.119895ae.svg","img/servicios/svg/bici.svg"],"img/servicios/svg/bici.svg"],"./..\\img\\servicios\\svg\\responsabilidad-civil.svg":[["responsabilidad-civil.92a3f592.svg","img/servicios/svg/responsabilidad-civil.svg"],"img/servicios/svg/responsabilidad-civil.svg"],"./..\\img\\servicios\\svg\\caucion.svg":[["caucion.77b74ca7.svg","img/servicios/svg/caucion.svg"],"img/servicios/svg/caucion.svg"],"./..\\img\\servicios\\svg\\accidentes-personales.svg":[["accidentes-personales.aa9ed4e8.svg","img/servicios/svg/accidentes-personales.svg"],"img/servicios/svg/accidentes-personales.svg"],"./..\\img\\servicios\\svg\\vida.svg":[["vida.e9341d46.svg","img/servicios/svg/vida.svg"],"img/servicios/svg/vida.svg"],"./..\\img\\servicios\\svg\\salud.svg":[["salud.f549f39b.svg","img/servicios/svg/salud.svg"],"img/servicios/svg/salud.svg"],"./..\\img\\servicios\\svg\\hogar.svg":[["hogar.d088b260.svg","img/servicios/svg/hogar.svg"],"img/servicios/svg/hogar.svg"],"./..\\img\\servicios\\svg\\industria.svg":[["industria.5d6d3ab7.svg","img/servicios/svg/industria.svg"],"img/servicios/svg/industria.svg"],"./..\\img\\servicios\\svg\\consorcio.svg":[["consorcio.d33044e1.svg","img/servicios/svg/consorcio.svg"],"img/servicios/svg/consorcio.svg"],"./..\\img\\servicios\\svg\\comercio-industria.svg":[["comercio-industria.910da8be.svg","img/servicios/svg/comercio-industria.svg"],"img/servicios/svg/comercio-industria.svg"],"./..\\img\\carousel\\home-office\\background-clean.svg":[["background-clean.43e75da4.svg","img/carousel/home-office/background-clean.svg"],"img/carousel/home-office/background-clean.svg"],"./..\\img\\carousel\\Descuento-auto\\background.png":[["background.24b1f55a.png","img/carousel/Descuento-auto/background.png"],"img/carousel/Descuento-auto/background.png"],"./..\\img\\carousel\\Promo-casa\\background.png":[["background.802a5af2.png","img/carousel/Promo-casa/background.png"],"img/carousel/Promo-casa/background.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50460" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/style.a6dae8f7.js.map