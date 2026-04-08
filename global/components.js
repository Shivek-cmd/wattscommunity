/* ═══════════════════════════════════════════════════════════
   WATTS GROUP — Component Loader
   Injects shared header, footer, and head tracking code
   from their respective files so no markup is duplicated.

   Include in every page:
     <script src="../global/components.js"></script>
   ═══════════════════════════════════════════════════════════ */

(function () {

  /* ─── Resolve base paths from this script's own URL ─── */
  var scripts = document.getElementsByTagName('script');
  var base = '';
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src && scripts[i].src.indexOf('components.js') !== -1) {
      base = scripts[i].src.replace(/\/[^\/]+$/, ''); /* e.g. http://…/global */
      break;
    }
  }
  var globalScripts = base.replace(/\/global$/, '/globalscripts');

  /* ─── Fetch an HTML file and inject it into a target element ─── */
  /* Any <script> tags found inside are re-created so they execute. */
  function injectHTML(url, container, position) {
    return fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (html) {
        var temp = document.createElement('div');
        temp.innerHTML = html;

        /* Collect and strip <script> nodes (innerHTML doesn't execute them) */
        var scriptNodes = Array.from(temp.querySelectorAll('script'));
        var scriptData  = scriptNodes.map(function (s) {
          return { src: s.getAttribute('src') || '', text: s.textContent };
        });
        scriptNodes.forEach(function (s) { s.remove(); });

        /* Insert remaining HTML */
        if (position === 'afterbegin') {
          container.insertAdjacentHTML('afterbegin', temp.innerHTML);
        } else {
          container.insertAdjacentHTML('beforeend', temp.innerHTML);
        }

        /* Re-create each script so the browser executes it */
        scriptData.forEach(function (sd) {
          var s = document.createElement('script');
          if (sd.src) {
            s.src = sd.src;
          } else {
            s.textContent = sd.text;
          }
          document.head.appendChild(s);
        });
      })
      .catch(function (err) {
        console.warn('[components.js] Could not load ' + url + ':', err);
      });
  }

  /* ─── Inject head tracking (GTM, meta tags, favicons, OG tags) ─── */
  injectHTML(globalScripts + '/headtrackingcode.js', document.head, 'beforeend');

  /* ─── Inject header + footer once the DOM body is available ─── */
  function onReady(fn) {
    if (document.body) {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  onReady(function () {
    injectHTML(base + '/header.html', document.body, 'afterbegin');
    injectHTML(base + '/footer.html', document.body, 'beforeend');
  });

})();
