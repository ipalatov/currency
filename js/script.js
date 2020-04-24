
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {

        function convertCur() {
            let promis = new Promise(function(resolve, reject) {
                if (request.readyState === 4 && request.status == 200) {
                    resolve();                    
                } else {
                    reject();
                }
            });
            return promis;
        }
        let data = JSON.parse(request.response);

        convertCur()
            .then( ()=> inputUsd.value = inputRub.value / data.usd)
            .catch( ()=> inputUsd.value = "Что-то пошло не так!");

    });

});