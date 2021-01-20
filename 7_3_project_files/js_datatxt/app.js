document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.txt', true);

  // console.log('ReadyState', xhr.readyState);
  xhr.onprogress = function () {
    console.log('ReadyState', xhr.readyState);
  }

  xhr.onload = function () {
    console.log('ReadyState', xhr.readyState);

    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }
  xhr.send();
}


