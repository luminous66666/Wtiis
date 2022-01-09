/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = (ctx) => {
  switch(ctx.encode) {
    case "xor":
      return {
        encode(str) {
          return str
        },
        decode(str) {
          return str
        }
      }
      break;
    case "plain":
      return {
        encode(str) {
          return str
        },
        decode(str) {
          return str
        }
      }
      break;
    case "base64":
      return {
        encode(str) {
          return str
        },
        decode(str) {
          return str
        }
      }
      break;
    default:
      return {
        encode(str) {
          return str
        },
        decode(str) {
          return str
        }
      }
      break;
  }
}

/***/ }),
/* 2 */
/***/ ((module) => {

function URL(ctx, curl) {
  return {
    encode(url, context) {
      try {
        url = url.toString()
        if (url.startsWith('data:')) return url;
        else if (url.startsWith('./')) url = url.splice(2);
        url = url.replace(/^\/\//g, 'https://')
        const validProtocol = url.startsWith('http://') || url.startsWith('https://') || url.startsWith('ws://') || url.startsWith('wss://');
        if (!context.Url.origin.endsWith('/') && !url.startsWith('/')) {
          context.Url.origin = context.Url.origin + '/'
        }
        const rewritten = ctx.prefix + (validProtocol ? url : context.Url.origin + url);
        //throw new Error('');
        if (context.replit) rewritten = rewritten.replace('https://', 'https:/')
        return rewritten.replace('http:', 'https:');
      } catch {
        return url
      }
    },
    decode(url) {
      return ctx.encoding.decode(url.replace(ctx.prefix, ''))
    }
  }
}

module.exports = URL

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = function(rhodium, URLParser) {
  var proxify={};proxify.elementHTML=element_array=>{element_array.forEach(element=>{Object.defineProperty(element.prototype, 'innerHTML',{set(value){const elem=new DOMParser().parseFromString(Object.getOwnPropertyDescriptor(window.Element.prototype, "outerHTML").get.call(this), 'text/html').body.querySelectorAll('*')[0]; Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML").set.call(elem, value); elem.querySelectorAll("script[src], iframe[src], embed[src], audio[src], img[src], input[src], source[src], track[src], video[src]").forEach(node=> node.setAttribute('src', node.getAttribute('src'))); elem.querySelectorAll("object[data]").forEach(node=> node.setAttribute('data', node.getAttribute('data'))); elem.querySelectorAll("a[href], link[href], area[href").forEach(node=> node.setAttribute('href', node.getAttribute('href'))); return Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML").set.call(this, elem.innerHTML);}, get(){return Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML").get.call(this);}}); Object.defineProperty(element.prototype, 'outerHTML',{set(value){const elem=new DOMParser().parseFromString(Object.getOwnPropertyDescriptor(window.Element.prototype, "outerHTML").get.call(this), 'text/html').body; Object.getOwnPropertyDescriptor(window.Element.prototype, "outerHTML").set.call(elem.querySelectorAll('*')[0], value); elem.querySelectorAll("script[src], iframe[src], embed[src], audio[src], img[src], input[src], source[src], track[src], video[src]").forEach(node=> node.setAttribute('src', node.getAttribute('src'))); elem.querySelectorAll("object[data]").forEach(node=> node.setAttribute('data', node.getAttribute('data'))); elem.querySelectorAll("a[href], link[href], area[href").forEach(node=> node.setAttribute('href', node.getAttribute('href'))); return Object.getOwnPropertyDescriptor(window.Element.prototype, "outerHTML").set.call(this, elem.innerHTML);}, get(){return Object.getOwnPropertyDescriptor(window.Element.prototype, "outerHTML").get.call(this);}});});};proxify.elementAttribute=(element_array, attribute_array)=>{element_array.forEach(element=>{if (element==window.HTMLScriptElement){Object.defineProperty(element.prototype, 'integrity',{set(value){return this.removeAttribute('integrity')}, get(){return this.getAttribute('integrity');}}); Object.defineProperty(element.prototype, 'nonce',{set(value){return this.removeAttribute('nonce')}, get(){return this.getAttribute('nonce');}});}element.prototype.setAttribute=new Proxy(element.prototype.setAttribute,{apply(target, thisArg, [ element_attribute, value]){attribute_array.forEach(array_attribute=>{if (array_attribute=='srcset' && element_attribute.toLowerCase()==array_attribute){var arr=[]; value.split(',').forEach(url=>{url=url.trimStart().split(' '); url[0]=URLParser.encode(url[0] || '', rhodium); arr.push(url.join(' '));}); return Reflect.apply(target, thisArg, [ element_attribute, arr.join(', ')]);}; if (array_attribute=='http-equiv' && element_attribute.toLowerCase()==array_attribute){value='No-U-Content-Security-Policy'; return Reflect.apply(target, thisArg, [ element_attribute, value])}if (element_attribute.toLowerCase()==array_attribute) value=URLParser.encode(value || '', rhodium);}); return Reflect.apply(target, thisArg, [ element_attribute, value]);}}); attribute_array.forEach(attribute=>{Object.defineProperty(element.prototype, attribute,{set(value){return this.setAttribute(attribute, value);}, get(){return this.getAttribute(attribute);}});});});};
  return proxify
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
class Rhodium {
  constructor(ctx) {
    Object.entries(ctx).forEach(([e,v]) => {
      this[e] = v
    })
  }
  resetLocation() {
    window.rLocation = $Rhodium.Location()
    document.rLocation = window.rLocation
  }
  Location() {
    return new Proxy({}, {
      set(og, ob, val) {
        if (ob=='toString'||ob=='assign'||ob=='replace'||ob=='reload'||ob=='hash'||ob=='search' || ob=='protocol') return true;
        return location[ob] = URLParser.encode($Rhodium.Url.href.replace($Rhodium.Url[ob], val), $Rhodium);
      },
      get(og, ob) {
        if (ob=='toString'||ob=='assign'||ob=='replace'||ob=='reload'||ob=='hash'||ob=='search'||ob=='protocol') return {
          toString: () => $Rhodium.Url.href,
          assign: (a) => location.assign(URLParser.encode(a, $Rhodium)),
          replace: (a) => location.replace(URLParser.encode(a, $Rhodium)),
          reload: (a) => location.reload(a?a:null),
          hash: location.hash,
          search: location.search,
          protocol: location.protocol,
        }[ob]; else return $Rhodium.Url[ob];
      }
    });
  }
  fetch() {
    return new Proxy(window.fetch, {
      apply(t, g, a) {
        if (a[0]) {
          a[0] = URLParser.encode(a[0], $Rhodium)
        }
        return Reflect.apply(t, g, a)
      }
    })
  }
  querySelectorAll() {
    return new Proxy(document.querySelectorAll, {
      apply(t, g, a) {
        if (a[0]=='script') return [...Reflect.apply(t, g, a)].splice(0, 1);
        return Reflect.apply(t, g, a)
      }
    })
  }
  getElementsByTagName() {
    return new Proxy(document.getElementsByTagName, {
      apply(t, g, a) {
        if (a[0]=='script') {
          var apply = Reflect.apply(t, g, a);
          [...apply].splice(0, 1);
          console.log(apply)
          return apply;
        }
        return Reflect.apply(t, g, a);
      }
    })
  };
  History() {
    return {
      pushState: new Proxy(history.pushState, {
        apply(t, g, a) {
          if (a[2]) a[2] = URLParser.encode(a[2], $Rhodium)
          Reflect.apply(t, g, a)
          return $Rhodium.resetLocation();
        }
      }),
      replaceState: new Proxy(history.replaceState, {
        apply(t, g, a) {
          if (a[2]) a[2] = location.origin + URLParser.encode(a[2], $Rhodium)
          Reflect.apply(t, g, a)
          return $Rhodium.resetLocation();
        }
      })
    } 
  }
  WebSocket() {
    return new Proxy(window.WebSocket, {
      construct(t, a) {
        if (a[0].includes('?')) {
          var origin = '&origin='+$Rhodium.Url.origin
        } else var origin = '?origin='+$Rhodium.Url.origin
        var hostnm = location.port ? location.hostname+':'+location.port : location.hostname
        a[0] = location.protocol.replace('http', 'ws')+'//'+hostnm+$Rhodium.prefix+'?ws='+a[0]+origin
        return Reflect.construct(t, a)
      }
    })
  }
  XMLHttpRequest() {
    return new Proxy(window.XMLHttpRequest.prototype.open, {
      apply(t, g, a) {
        if (a[1]) a[1] = URLParser.encode(a[1], $Rhodium)
        return Reflect.apply(t, g, a)
      }
    })
  }
  Worker() {
    return function() {}
  }
  Eval() {
    return new Proxy(window.eval, {
      apply(t, g, a) {
        return Reflect.apply(t, g, a)
      }
    })
  }
  Open() {
    return new Proxy(window.open, {
      apply(t, g, a) {
        if (a[0]) a[0] = URLParser.encode(a[0])
        return Reflect.apply(t, g, a)
      }
    })
  }
}

$Rhodium = new Rhodium(JSON.parse(document.currentScript.getAttribute('data-config')))

const Encoding = __webpack_require__(1)
$Rhodium.encoding = Encoding($Rhodium)
const URLParser = __webpack_require__(2)($Rhodium)
//const Rewrite = require('../rewrite/bundle')

$Rhodium.Url = new URL($Rhodium.url)

const Proxify = __webpack_require__(3)($Rhodium, URLParser)

Proxify.elementHTML([ window.HTMLDivElement]);Proxify.elementAttribute([ window.HTMLAnchorElement, window.HTMLAreaElement, window.HTMLLinkElement], [ 'href']);Proxify.elementAttribute([ window.HTMLScriptElement, window.HTMLIFrameElement, window.HTMLEmbedElement, window.HTMLAudioElement, window.HTMLInputElement, window.HTMLTrackElement], [ 'src']);Proxify.elementAttribute([ window.HTMLImageElement, HTMLSourceElement], [ 'src', 'srcset']);Proxify.elementAttribute([ window.HTMLObjectElement], [ 'data']);Proxify.elementAttribute([ window.HTMLFormElement], [ 'action']); 

document.querySelectorAll = $Rhodium.querySelectorAll();
document.getElementsByTagName = $Rhodium.getElementsByTagName();

window.fetch = $Rhodium.fetch();
window.history.pushState = $Rhodium.History().pushState;
window.history.replaceState = $Rhodium.History().replaceState;
window.WebSocket = $Rhodium.WebSocket();
window.XMLHttpRequest.prototype.open = $Rhodium.XMLHttpRequest();
window.Worker = $Rhodium.Worker();
window.open = $Rhodium.Open();
window.rLocation = $Rhodium.Location();
document.rLocation = rLocation;
window.eval = $Rhodium.Eval();

class Function {
  constructor() {
    console.log(
      'no'
    )
  }
};
})();

/******/ })()
;