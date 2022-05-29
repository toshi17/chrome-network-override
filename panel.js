function addInfo(info) {
  const li = document.querySelector('#list');
  const item = document.createElement('li');
  item.innerHTML = info;
  li.appendChild(item);
}

chrome.devtools.network.onRequestFinished.addListener(
  function (request) {
    const reqStr = JSON.stringify(request.request);
    const resStr = JSON.stringify(request.response);
    addInfo(`request: ${reqStr}, response: ${resStr}`)
  }
);