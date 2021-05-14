function carregar(){
    let msg = document.querySelector('#msg');
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
    let formInput = document.querySelector('usdtxt');
    let res = document.querySelector('#res');
    if (usdtxt.value.length == 0) {
        alert('[ERRO] verifique os dados e tente novamente!')
    } else{
        let radcurrency = document.getElementsByName('radcurrency')
        let dolar = Number(usdtxt.value) * 5
        res.innerHTML = `Conversao concluida ${dolar} reais`

        let moeda = document.querySelector('dolar')
        let option = ''
        if(radcurrency[0].checked){
            option = 'Dolar'
            dolar.src = 'assets/images/icon-dolar.png'
        } else if (radcurrency[1].checked) {
            option = 'Bitcoin'
            dolar.src = 'assets/images/icon-bitcoin.png'
        }
        res.innerHTML = `Detectamos ${option}`
    }
}