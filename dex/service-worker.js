"use strict";var precacheConfig=[["/dex/200.html","bedba610005e4885e801944c8f4ae703"],["/dex/static/css/main.950d107f.css","0cade3c501804cfac07e8281e2365113"],["/dex/static/js/main.9da0e837.js","e1246291e506d7d2f1be73f142246e4c"],["/dex/static/media/clock.99ecb079.svg","99ecb07918ccb7c238b8bcfe2ef08158"],["/dex/static/media/coinbase-icon-512px.ef2c0d4b.png","ef2c0d4b8f0f9e89dfb2fbccbb5b53b0"],["/dex/static/media/dapphub_icn_metamask.3f7a0757.svg","3f7a075768279d87331baddae00af792"],["/dex/static/media/ethereum-logo.5332820c.svg","5332820c90606b5e30ad4fde234ea836"],["/dex/static/media/ic_add_circle_24px.1432ebe8.svg","1432ebe8cacc89cc107746e145ae43e5"],["/dex/static/media/ic_remove_24px.13f22941.svg","13f229419d18a5b37500ed0bf6c4db23"],["/dex/static/media/icn-mist.b89a8569.svg","b89a85691254687563d77f137ce7ea75"],["/dex/static/media/icon-failed.dfd34c35.svg","dfd34c3581d2f0440d101961a1c928d5"],["/dex/static/media/icon-info.8ffc7c5e.svg","8ffc7c5ef8383d4e1836b0cf9870674c"],["/dex/static/media/icon-loading.9cabb5c5.svg","9cabb5c515eae9ea3efe0d061e784bec"],["/dex/static/media/icon-syncing.cdf1f970.svg","cdf1f9701daeb2be8e1c1174116a8ded"],["/dex/static/media/icon-tick.ba63778d.svg","ba63778db95b91915acfd87e121438fc"],["/dex/static/media/icon-warning.41697f91.svg","41697f913aa2908f472d0ecdddac15a6"],["/dex/static/media/icon_arrow_down.eccd86cb.svg","eccd86cbb925722f3cae4c4ed20d89a7"],["/dex/static/media/icon_arrow_left.01e3ed9e.svg","01e3ed9efaabe77edfa92f6a0c2c524e"],["/dex/static/media/icon_arrow_right.a67fd68b.svg","a67fd68bbfbe74c2505d9c70b0a76ebe"],["/dex/static/media/icon_arrow_up.d28fa4e3.svg","d28fa4e3889ac64fa2d68247c2973f7c"],["/dex/static/media/icon_idle.effdf2e3.svg","effdf2e38a8a836eeb0ec301ab738bc9"],["/dex/static/media/logo-oasis-hover.88c6573f.png","88c6573f75e440d234acb75e986b169a"],["/dex/static/media/logo-oasis.276ec1d3.png","276ec1d35ea508d371b692eb5ea7d6a0"],["/dex/static/media/metamask-logo.526a99a0.svg","526a99a0b66c378239ab0ffadeb36c99"],["/dex/static/media/mist-logo.ab638bd3.svg","ab638bd3bc3190025984e6a6310ce145"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/dex/200.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});