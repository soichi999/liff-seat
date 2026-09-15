var LIFF_ID = '2011234867-hoIMCFuA';
var ADD_FRIEND_URL = 'https://line.me/R/ti/p/@251wgwtq';
var LOOKUP_API = 'https://script.google.com/macros/s/AKfycby-A8FU2kQbCLLbgzBaBhdfz80S_9Bkirgj2rDhe5kvGo8AJysrIxs6wmcRqLil7GE/exec';

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
var loadingTextEl = document.getElementById('loading-text');

function show(html) {
  loadingEl.classList.add('hidden');
  contentEl.classList.remove('hidden');
  contentEl.innerHTML = html;
}
function showLoading(text) {
  contentEl.classList.add('hidden');
  loadingEl.classList.remove('hidden');
  loadingTextEl.textContent = text;
}
function showError(message, detail) {
  show('<p class="error">' + message + (detail ? '<code>' + detail + '</code>' : '') + '</p>');
}

liff.init({ liffId: LIFF_ID }).then(function () {
  var params = new URLSearchParams(location.search);
  var seat = params.get('seat') || '';

  if (!liff.isLoggedIn()) { liff.login(); return; }

  if (!seat) {
    showError('座席情報を読み取れませんでした。<br>お手数ですが、テーブルのQRコードをもう一度お読み取りください。');
    return;
  }

  fetch(LOOKUP_API + '?action=lookup&seat=' + encodeURIComponent(seat))
    .then(function (res) { return res.json(); })
    .then(function (result) {
      var orderUrl = result.orderUrl;
      if (!orderUrl) {
        showError('座席情報が見つかりませんでした。<br>お手数ですが、店員までお声がけください。', 'seat: ' + seat);
        return;
      }

      liff.getFriendship().then(function (friendship) {
        if (friendship.friendFlag) {
          showLoading('ご注文ページへ移動します…');
          window.location.href = orderUrl;
          return;
        }

        show(
          '<div class="bubble">' +
            '<h1>友だち追加でおトクに</h1>' +
            '<p class="lead">クーポンや最新情報をLINEでお届けします。</p>' +
          '</div>' +
          '<button class="primary" id="addFriendBtn">友だち追加して注文に進む</button>' +
          '<a class="secondary" href="' + orderUrl + '">友だち追加せずに注文に進む</a>'
        );

        document.getElementById('addFriendBtn').addEventListener('click', function () {
          showLoading('友だち追加を確認しています…');
          try {
            liff.requestFriendship().then(function () {
              showLoading('ご注文ページへ移動します…');
              window.location.href = orderUrl;
            }).catch(function (err) {
              showError('友だち追加でエラーが発生しました。', err && err.message);
            });
          } catch (e) {
            showError('メソッド呼び出しエラー', e.message);
          }
        });
      });
    });
}).catch(function (err) {
  showError('ただいま接続できませんでした。<br>時間をおいて、もう一度お試しください。', err && err.message);
});
