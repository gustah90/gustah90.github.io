/** Apply only the display preference before styles load; no telemetry or remote calls. */
(() => {
  let preference;
  try {
    preference = window.localStorage.getItem('portal-theme');
  } catch {
    // Storage can be disabled without preventing rendering.
  }
  let theme = preference;
  if (preference !== 'light' && preference !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();
