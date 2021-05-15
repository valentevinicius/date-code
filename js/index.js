const getDollarValue = date => {
    const urlBuilder = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${date}%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
    return fetch(urlBuilder).then(data => {
        return data.json()
    }).then(result => {
        const {value} = result
        return value
    }).catch(err =>{
        console.error('[ERRO]:', err)
    })
}
function carregar(){
    let msg = document.querySelector('#msg').children[0];
    let img = document.querySelector('#photo');
    let data = new Date();
    let hora = data.getHours();

    //Alterar cor e imagem, de acordo com o horario
    if (hora >= 0 && hora <12){
        msg.innerHTML = `Bom dia, agora sao ${hora} horas.`
        img.src = 'assets/images/fotomanha.jpg'
        //BOM DIA
        document.body.style.background = '#FDD692'
    } else if (hora >=12 && hora <18) {
        msg.innerHTML = `Boa tarde, agora sao ${hora} horas.`
        img.src = 'assets/images/fototarde.png'
        //BOA TARDE
        document.body.style.background = '#EC7357'
    } else {
        msg.innerHTML = `Boa noite, agora sao ${hora} horas.`
        img.src = 'assets/images/fotonoite.png'
        //BOA NOITE
        document.body.style.background = '#754F44'
    }
}

function converter() {
    let formInput = document.querySelector('#usdtxt');
    let res = document.querySelector('#res');
    let dolar = document.querySelector('#moeda');
    let option = document.getElementsByName('radcurrency');

    if (option[0].checked) {
        const x = getDollarValue('05-07-2021')
        let dolarRes = Number(usdtxt.value) * 5
        option = 'Dolar'
        dolar.src = 'assets/images/icon-dolar.png'
        res.innerHTML = `Detectamos ${option}, valor convertido: ${dolarRes} reais`
    } else if (option[1].checked) {
        let bitcoinRes = Number(usdtxt.value) * 255419.13
        option = 'Bitcoin'
        dolar.src = 'assets/images/icon-bitcoin.png'
        res.innerHTML = `Detectamos ${option}, valor convertido: ${bitcoinRes.toFixed(0)} reais`
    }
}

window.onload = () => {
    carregar()
    converter()
}