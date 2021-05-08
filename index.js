function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();


    msg.innerHTML = `Agora sao ${hora} horas.`

    if (hora >= 0 && hora <12){
        img.src = 'fotomanha.png'
        //BOM DIA
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <18) {
        img.src = 'fototarde.png'
        //BOA TARDE
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'fotonoite.png'
        //BOA NOITE
        document.body.style.background = '#515154'
    }
}