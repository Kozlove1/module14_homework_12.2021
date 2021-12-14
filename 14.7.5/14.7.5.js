function pageLoad(){

    let inp = document.querySelector('#inp')
    let inp2 = document.querySelector('#inp2')
    const btn = document.querySelector('#btn')
    const resultDiv = document.querySelector('.result')
    let photoFromLocal = localStorage.getItem('myPictures')


    let localPhoto = localStorage.getItem('localPhoto')
    if (localPhoto){
        innerResponse(localPhoto)
    }




    btn.addEventListener("click", sendRequest)

    function sendRequest() {
        if (validateInp() && validateInp2()) {
            fetch(` https://picsum.photos/v2/list?page=${inp.value}&limit=${inp2.value}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    let arrPhoto = data
                    localStorage.setItem('localPhoto', photo)
                    innerResponse(arrPhoto);
                })
        } else if (!validateInp() && !validateInp2()){
            resultDiv.innerHTML = ('<p>Номер страницы и лимит вне диапазона от 1 до 10</p>')

        } else if (!validateInp()){
            resultDiv.innerHTML = ('<p>Номер страницы вне диапазона от 1 до 10</p>')

        } else if  (!validateInp2()){
            resultDiv.innerHTML = ('<p>Лимит вне диапазона от 1 до 10</p>')

        }
    }


    function validateInp() {
        let validated = false;
        if(inp.value >= 1 && inp.value <= 10){
            validated = true;
        }
        return validated;
    }

    function validateInp2() {
        let validated = false;
        if(inp2.value >= 1 && inp2.value <= 10){
            validated = true;
        }
        return validated;
    }

    function innerResponse(photo){
        for (let i in photo)
            resultDiv.innerHTML += (`<img 
      src="${photo[i].download_url}" 
      width="${photo[i].width/10}" 
      height="${photo[i].height/10}" 
      alt="${photo[i].author}"
      >`)
        }
    }
}


document.addEventListener("DOMContentLoaded", pageLoad);