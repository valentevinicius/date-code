const getDollarValue = date => {
    const urlBuilder = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${date}%27&$top=1&$format=json&$select=cotacaoCompra,dataHoraCotacao`
    return fetch(urlBuilder).then(data => {
        return data.json()
    }).then(result => {
        const {value} = result
        return value
    }).catch(err =>{
        console.error('[ERRO]:', err)
    })
} //Funcao de acesso e manipulacao dos dados em json


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
    const date = `${datetime.getMonth()}-${datetime.getDay()}-${datetime.getFullYear()}`
    let formInput = document.querySelector('#usdtxt');
    let res = document.querySelector('#res');
    let dolar = document.querySelector('#moeda');
    let option = document.getElementsByName('radcurrency');

    if (option[0].checked) {
        const x = getDollarValue(date).then(result => {
            // Caso precise manipular os valores utilize o forEach
            result.forEach(value => {
                value.cotacaoCompra
                value.dataHoraCotacao
            })
            // ou retorne o valor direto que vc quer e agora sim x tem o valor que vc precisa
            return result[0].cotacaoCompra
        }) //Acesso a funcao
        console.log(x)
        let dolarRes = formInput * x
        option = 'Dolar'
        dolar.src = 'assets/images/icon-dolar.png'
        res.innerHTML = `Detectamos ${option}, valor convertido: ${dolarRes.toFixed(0)} reais`
    } else if (option[1].checked) {
        let bitcoinRes = Number(usdtxt.value) * 255419.13
        option = 'Bitcoin'
        dolar.src = 'assets/images/icon-bitcoin.png'
        res.innerHTML = `Detectamos ${option}, valor convertido: ${bitcoinRes.toFixed(0)} reais`
    }
}

// window.onload = () => {
//     carregar()
//     converter()
// }
const Init = () => {
    carregar()
    converter()
}
export default Init