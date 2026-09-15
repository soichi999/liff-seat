var LIFF_ID = '2011234867-hoIMCFuA';
var SHOPCARD_URL = 'https://u.lin.ee/s6BUlBd';
var GOOGLE_REVIEW_URL = 'https://g.page/r/CQsxuHz764MAEAE/review';

document.body.innerHTML =
  '<div class="card">' +
    '<div id="loading">' +
      '<div class="spinner"></div>' +
      '<p class="lead" id="loading-text">少々お待ちください…</p>' +
    '</div>' +
    '<div id="content" class="hidden"></div>' +
  '</div>';

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
    '<div class="bubble">' +
      '<h1>ご来店ありがとうございました</h1>' +
      '<p class="lead">下のボタンからスタンプをお受け取りください。</p>' +
    '</div>' +
    '<button class="primary" id="stampBtn">スタンプを受け取る</button>' +
    '<div class="note-box">' +
      '<p class="note">スタンプ受け取り後、ブラウザに口コミページが開きます。<br>よろしければ感想をお聞かせください（任意です）。</p>' +
    '</div>' +
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
