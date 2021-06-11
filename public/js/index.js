const getDollarValue = date => {
    const urlBuilder = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${date}%27&$top=1&$format=json&$select=cotacaoCompra,dataHoraCotacao`
    //const urlBuilder = 'http://localhost:5000/dollar'
    return fetch(urlBuilder).then(data => {
        //console.log(data.json())
        return data.json()
    }).then(result => {
        const {value} = result
        return value
    }).catch(err =>{
        console.error('[ERRO]:', err)
    })
} //Funcao de acesso e manipulacao dos dados (dolar) em json

async function fetchWeatherJSON() {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=79cc3db9098c4dc2a4f10130211106&q=Sao Paulo&aqi=no`);
    const weather = await response.json();
    return weather;
}

fetchWeatherJSON().then(weather => {
    weather;
    console.log(weather);
});

function carregar(){
    let msg = document.querySelector('#msg').children[0];
    let img = document.querySelector('#image');
    let day = new Date();
    let hour = day.getHours();

    //Alterar cor e imagem, de acordo com o horario
    if (hour >= 0 && hour <12){
        msg.innerHTML = `Bom dia, agora sao ${hour} horas.`
        img.src = 'assets/images/fotomanha.jpg'
        //BOM DIA
        document.body.style.background = '#FDD692'
    } else if (hour >=12 && hour <18) {
        msg.innerHTML = `Boa tarde, agora sao ${hour} horas.`
        img.src = 'assets/images/fototarde.jpg'
        //BOA TARDE
        document.body.style.background = '#EC7357'
    } else if (hour >18 && hour <23) {
        msg.innerHTML = `Boa noite, agora sao ${hour} horas.`
        img.src = 'assets/images/fotonoite.jpg'
        //BOA NOITE
        document.body.style.background = '#754F44'
    }
}   

function converter() {
    const datetime = new Date();
    const dia = `${datetime.getMonth()+1}-${datetime.getDate()}-${datetime.getFullYear()}`
    let formInput = document.querySelector('#usdtxt');
    let res = document.querySelector('#res');
    let dolar = document.querySelector('#moeda');
    let option = document.getElementsByName('radcurrency');
    console.log(dia)
    if (option[0].checked) {
        const dollValue = getDollarValue(dia).then(result => {
            // Caso precise manipular os valores utilize o forEach
            result.forEach(value => {
              value.cotacaoCompra
              value.dataHoraCotacao
            })
            // ou retorne o valor direto que vc quer e agora sim x tem o valor que vc precisa
            return result[0].cotacaoCompra
          }) //Acesso a funcao
        const printDollar = async () => {
            const a = await dollValue;
            let multiply = (a)
            console.log(multiply)
            return multiply;
        };
        option = 'Dolar'
        dolar.src = 'assets/images/icon-dolar.png'
        res.innerHTML = `Detectamos <strong>${option}</strong>, valor convertido: ${printDollar()} reais`
    } else if (option[1].checked) {
        let bitcoinRes = Number(usdtxt.value) * 255419.13
        option = 'Bitcoin'
        dolar.src = 'assets/images/icon-bitcoin.png'
        res.innerHTML = `Detectamos <strong>${option}</strong>, valor convertido: ${bitcoinRes.toFixed(0)} reais`
    }
}

const Init = () => {
    carregar()
    converter()
}
export default Init