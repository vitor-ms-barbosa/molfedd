function startPage() {
    document.getElementById('footer-sm').innerHTML = '<a href="#"><span class="icon-fw"><i class="fab fa-instagram"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="fab fa-facebook-square"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="far fa-envelope"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="fab fa-whatsapp"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="fab fa-linkedin"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="fab fa-youtube"></i></span></a>';

    document.getElementById('information-footer').innerHTML = '<p>INSTITUTO VENNTEC DE TECNOLOGIA</p>'+
    '<br>'+
    '<p>MOLFEDD</p>'+
    '<p>Rua Gorbi Oufred Nº 105, Centro, Ventário - Cap., 0000001 - CVC: 039485-000293-00001</p>'+
    '<p>E-Mail: <a class="email-a" target="_black" title="E-Mail" href="#">atendimento@molfedd.vnt.org</a></p>';
    // Endereço disposto em todas as páginas

    document.getElementById('copyyear').innerHTML = '2021 - ' + new Date().getFullYear();
    // Data do copyright da página
}

function openMenu(){
    document.getElementById('menu-link-mob-nav').style.display = "block";
    document.getElementById('button-open').style.display = "none";
    // document.getElementById('logo-page').style.display = "none";
}

function closeMenu(){
    document.getElementById('menu-link-mob-nav').style.display = "none";
    document.getElementById('button-open').style.display = "block";
    // document.getElementById('logo-page').style.display = "block";
}