/**
 * Функция-обертка над XMLHttpRequest, осуществляющая запрос
 * url - урл, по которому будет осуществляться запрос
 * callback - функция, которая вызовется при успешном выполнении
 * и первым параметром получит объект-результат запроса
 */
function useRequest(callback) {
    const inp = document.querySelector('#inp')

    let url = `https://picsum.photos/v2/list/?limit=${inp.value}`


    if(inp.value <= 10){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                const result = JSON.parse(xhr.response);
                if (callback) {
                    callback(result);
                }
            }
        };

        xhr.onerror = function() {
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };

        xhr.send();
    }else {
        resultNode.innerHTML = `<div class="card">
        <p>"число вне диапазона от 1 до 10"</p>
      </div>`
    }
}

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('#btn');

function displayResult(apiData) {
    let cards = '';


    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    useRequest(displayResult);
})