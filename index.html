<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ご来店ありがとうございました</title>
  <style>
    :root {
      --line-green: #06C755;
      --text: #2b2b2b;
      --muted: #9aa0a6;
      --bg: #ffffff;
      --border: #ececec;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --text: #ededed;
        --muted: #8b9096;
        --bg: #1a1a1a;
        --border: #333;
      }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Noto Sans JP", sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .card {
      width: 100%;
      max-width: 400px;
      padding: 2.5rem 1.5rem;
      text-align: center;
    }
    .spinner {
      width: 34px;
      height: 34px;
      margin: 0 auto 1.2rem;
      border: 3px solid var(--border);
      border-top-color: var(--line-green);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .hidden { display: none; }
    .icon { font-size: 2.6rem; margin-bottom: 0.6rem; }
    h1 { font-size: 1.15rem; font-weight: 600; line-height: 1.6; margin: 0 0 0.6rem; }
    p.lead { font-size: 0.9rem; line-height: 1.7; color: var(--muted); margin: 0 0 1.8rem; }
    button.primary {
      display: block; width: 100%; border: none;
      background: var(--line-green); color: #fff;
      font-size: 1rem; font-weight: 600; font-family: inherit;
      padding: 1rem 1.2rem; border-radius: 12px;
      box-shadow: 0 3px 10px rgba(6, 199, 85, 0.25);
      cursor: pointer;
    }
    a.secondary {
      display: inline-block; margin-top: 1.4rem;
      color: var(--muted); font-size: 0.8rem;
      text-decoration: underline; text-underline-offset: 3px;
    }
    .note { font-size: 0.75rem; color: var(--muted); line-height: 1.6; margin-top: 1rem; }
    .error { font-size: 0.85rem; color: var(--muted); line-height: 1.7; }
  </style>
</head>
<body>
  <div class="card">
    <div id="loading">
      <div class="spinner"></div>
      <p class="lead" id="loading-text">少々お待ちください…</p>
    </div>
    <div id="content" class="hidden"></div>
  </div>

  <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
  <script>
    var LIFF_ID = 'ここに新しいLIFF IDを入れる';
    var SHOPCARD_URL = 'https://liff.line.me/1654883656-XqwKRkd4/accounts/251wgwtq/shopcards/01M1BEWTZY31SD0G5K1V7FKHV7';
    var GOOGLE_REVIEW_URL = 'https://g.page/r/CQsxuHz764MAEAE/review';

    var loadingEl = document.getElementById('loading');
    var contentEl = document.getElementById('content');

    function show(html) {
      loadingEl.classList.add('hidden');
      contentEl.classList.remove('hidden');
      contentEl.innerHTML = html;
    }
    function showLoading(text) {
      contentEl.classList.add('hidden');
      loadingEl.classList.remove('hidden');
      document.getElementById('loading-text').textContent = text;
    }
    function showError(message) {
      show('<p class="error">' + message + '</p>');
    }

    liff.init({ liffId: LIFF_ID }).then(function () {
      if (!liff.isLoggedIn()) { liff.login(); return; }

      show(
        '<div class="icon">🎉</div>' +
        '<h1>ご来店ありがとうございました</h1>' +
        '<p class="lead">来店スタンプをお受け取りください。</p>' +
        '<button class="primary" id="stampBtn">スタンプを受け取る</button>' +
        '<p class="note">スタンプ受け取り後、ブラウザに口コミページが開きます。<br>よろしければ感想をお聞かせください（任意です）。</p>' +
        '<a class="secondary" href="' + GOOGLE_REVIEW_URL + '" target="_blank">口コミだけ書く</a>'
      );

      document.getElementById('stampBtn').addEventListener('click', function () {
        showLoading('スタンプ画面を開いています…');
        liff.openWindow({ url: GOOGLE_REVIEW_URL, external: true });
        setTimeout(function () {
          window.location.href = SHOPCARD_URL;
        }, 600);
      });
    }).catch(function (err) {
      showError('ただいま接続できませんでした。<br>時間をおいて、もう一度お試しください。');
    });
  </script>
</body>
</html>
