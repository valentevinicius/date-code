function carregar(){
    let msg = document.querySelector('#msg');
    let img = document.querySelector('#photo');
    let data = new Date();
    let hora = data.getHours();
    let usd = document.querySelector('#USD');
    msg.innerHTML = `Agora sao ${hora} horas.`

    //Alterar cor e imagem, de acordo com o horario
    if (hora >= 0 && hora <12){
        img.src = 'assets/images/fotomanha.jpg'
        //BOM DIA
        document.body.style.background = '#FDD692'
    } else if (hora >=12 && hora <18) {
        img.src = 'assets/images/fototarde.png'
        //BOA TARDE
        document.body.style.background = '#EC7357'
    } else {
        img.src = 'assets/images/fotonoite.png'
        //BOA NOITE
        document.body.style.background = '#754F44'
    }
}

function converter(){
    let valor = document.querySelector('USD');
    let radio = document.getElementsByName('currency');
}