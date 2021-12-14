function useRequest() {
    const inp = document.querySelector('#inp')
    const inp2 = document.querySelector('#inp')

    if (inp.value >= 100 && inp2.value <= 300) {
        if (inp2.value >= 100 && inp2.value <= 300) {
            fetch(`https://picsum.photos/${inp2.value}/${inp.value}`)
                .then((response) => {
                    resultNode.innerHTML = `<div>
                    <img src='${response.url}'>
      </div>`
                })
        } else {
            resultNode.innerHTML = `<div class="card">
        <p>"одно из чисел вне диапазона от 100 до 300"</p>
      </div>`
        }
    } else {
        resultNode.innerHTML = `<div class="card">
        <p>"одно из чисел вне диапазона от 100 до 300"</p>
      </div>`
    }
}


const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('#btn');


btnNode.addEventListener('click', () => {
    useRequest();
})





