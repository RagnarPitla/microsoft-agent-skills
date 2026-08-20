// Copy buttons for every code block on the site.
//
// Done here rather than in the markup because the code blocks come from three
// different places - install commands generated from .agents/install-block.md,
// the invoke line on a skill page, and fenced blocks inside the skill prose that
// Jekyll renders. Decorating them after the fact means one implementation
// covers all three and none of the generators has to know about a button.
(function () {
  if (!document.querySelector("pre")) return;

  var copy = function (text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);

    // Pages is HTTPS, but a local preview over plain HTTP has no clipboard API.
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:absolute;left:-9999px;top:0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy") ? resolve() : reject();
      } catch (e) {
        reject(e);
      }
      document.body.removeChild(ta);
    });
  };

  var ICON =
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="5.5" y="5.5" width="8.5" height="8.5" rx="1.5"/>' +
    '<path d="M10.5 3.5v-1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1V9a1 1 0 0 0 1 1h1"/></svg>';

  var TICK =
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M3 8.5 6.2 11.8 13 5"/></svg>';

  document.querySelectorAll("pre").forEach(function (pre) {
    var text = (pre.querySelector("code") || pre).innerText.replace(/\n+$/, "");
    if (!text.trim()) return;

    var wrap = document.createElement("div");
    wrap.className = "snip";
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy";
    btn.innerHTML = ICON;
    btn.title = "Copy";
    // The button carries no text, so this is the only thing a screen reader has.
    btn.setAttribute("aria-label", "Copy to clipboard");
    wrap.appendChild(btn);

    var timer;
    btn.addEventListener("click", function () {
      copy(text).then(
        function () {
          btn.innerHTML = TICK;
          btn.title = "Copied";
          btn.classList.add("done");
        },
        function () {
          btn.title = "Press Ctrl+C to copy";
        },
      );
      clearTimeout(timer);
      timer = setTimeout(function () {
        btn.innerHTML = ICON;
        btn.title = "Copy";
        btn.classList.remove("done");
      }, 1600);
    });
  });
})();
