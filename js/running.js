let cont = 0;
let num_a = 0;
let num_b = 0;
let con_t;

function sortear(){
    const random = (num) => Math.floor(Math.random() * num);
    con_t = random(7);
    document.getElementById('num').innerHTML = con_t;
    
    cont = cont + 1;

    verificar();

    function verificar(){

        let verifica = cont % 2;

        if(verifica == 0){

            // document.getElementById('leg').innerHTML = "O JOGADOR VERMELHO DEVE SORTEAR SEU NÚMERO";

            num_a = num_a + con_t;

            limpar_a();

            if(num_a == 1){
                document.getElementById('a1').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 2){
                document.getElementById('a2').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 3){
                document.getElementById('a3').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 4){
                document.getElementById('a4').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 5){
                document.getElementById('a5').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 6){
                document.getElementById('a6').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 7){
                document.getElementById('a7').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 8){
                document.getElementById('a8').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 9){
                document.getElementById('a9').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 10){
                document.getElementById('a10').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 11){
                document.getElementById('a11').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 12){
                document.getElementById('a12').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 13){
                document.getElementById('a13').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 14){
                document.getElementById('a14').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 15){
                document.getElementById('a15').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 16){
                document.getElementById('a16').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 17){
                document.getElementById('a17').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 18){
                document.getElementById('a18').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 19){
                document.getElementById('a19').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 20){
                document.getElementById('a20').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 21){
                document.getElementById('a21').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 22){
                document.getElementById('a22').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 23){
                document.getElementById('a23').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 24){
                document.getElementById('a24').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 25){
                document.getElementById('a25').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 26){
                document.getElementById('a26').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 27){
                document.getElementById('a27').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 28){
                document.getElementById('a28').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 29){
                document.getElementById('a29').style.boxShadow = "2px 2px 2px";
            }else if(num_a == 30){
                document.getElementById('a30').style.boxShadow = "2px 2px 2px";
            }else if(num_a >= 31){
                document.getElementById('body').style.display = "none";
                document.getElementById('body-b').style.display = "none";
                document.getElementById('body-a').style.display = "flex";
            }

        }else{
            num_b = num_b + con_t;

            // document.getElementById('leg').innerHTML = "O JOGADOR AZUL DEVE SORTEAR SEU NÚMERO";
            
            limpar_b();

            if(num_b == 1){
                document.getElementById('b1').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 2){
                document.getElementById('b2').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 3){
                document.getElementById('b3').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 4){
                document.getElementById('b4').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 5){
                document.getElementById('b5').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 6){
                document.getElementById('b6').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 7){
                document.getElementById('b7').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 8){
                document.getElementById('b8').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 9){
                document.getElementById('b9').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 10){
                document.getElementById('b10').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 11){
                document.getElementById('b11').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 12){
                document.getElementById('b12').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 13){
                document.getElementById('b13').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 14){
                document.getElementById('b14').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 15){
                document.getElementById('b15').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 16){
                document.getElementById('b16').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 17){
                document.getElementById('b17').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 18){
                document.getElementById('b18').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 19){
                document.getElementById('b19').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 20){
                document.getElementById('b20').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 21){
                document.getElementById('b21').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 22){
                document.getElementById('b22').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 23){
                document.getElementById('b23').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 24){
                document.getElementById('b24').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 25){
                document.getElementById('b25').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 26){
                document.getElementById('b26').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 27){
                document.getElementById('b27').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 28){
                document.getElementById('b28').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 29){
                document.getElementById('b29').style.boxShadow = "2px 2px 2px";
            }else if(num_b == 30){
                document.getElementById('b30').style.boxShadow = "2px 2px 2px";
            }else if(num_b >= 31){
                document.getElementById('body').style.display = "none";
                document.getElementById('body-b').style.display = "flex";
                document.getElementById('body-a').style.display = "none";
            }
            
        }
    }

}

function reset(){
    cont = 0;
    num_a = 0;
    num_b = 0;
    con_t = 0; 
    document.getElementById('body').style.display = "block";
    document.getElementById('body-b').style.display = "none";
    document.getElementById('body-a').style.display = "none";
    document.getElementById('num').innerHTML = "N";
    limpar_a();
    limpar_b();
}

function limpar_a(){
    document.getElementById('a1').style.boxShadow = "0px 0px 0px";
    document.getElementById('a2').style.boxShadow = "0px 0px 0px";
    document.getElementById('a3').style.boxShadow = "0px 0px 0px";
    document.getElementById('a4').style.boxShadow = "0px 0px 0px";
    document.getElementById('a5').style.boxShadow = "0px 0px 0px";
    document.getElementById('a6').style.boxShadow = "0px 0px 0px";
    document.getElementById('a7').style.boxShadow = "0px 0px 0px";
    document.getElementById('a8').style.boxShadow = "0px 0px 0px";
    document.getElementById('a9').style.boxShadow = "0px 0px 0px";
    document.getElementById('a10').style.boxShadow = "0px 0px 0px";
    document.getElementById('a11').style.boxShadow = "0px 0px 0px";
    document.getElementById('a12').style.boxShadow = "0px 0px 0px";
    document.getElementById('a13').style.boxShadow = "0px 0px 0px";
    document.getElementById('a14').style.boxShadow = "0px 0px 0px";
    document.getElementById('a15').style.boxShadow = "0px 0px 0px";
    document.getElementById('a16').style.boxShadow = "0px 0px 0px";
    document.getElementById('a17').style.boxShadow = "0px 0px 0px";
    document.getElementById('a18').style.boxShadow = "0px 0px 0px";
    document.getElementById('a19').style.boxShadow = "0px 0px 0px";
    document.getElementById('a20').style.boxShadow = "0px 0px 0px";
    document.getElementById('a21').style.boxShadow = "0px 0px 0px";
    document.getElementById('a22').style.boxShadow = "0px 0px 0px";
    document.getElementById('a23').style.boxShadow = "0px 0px 0px";
    document.getElementById('a24').style.boxShadow = "0px 0px 0px";
    document.getElementById('a25').style.boxShadow = "0px 0px 0px";
    document.getElementById('a26').style.boxShadow = "0px 0px 0px";
    document.getElementById('a27').style.boxShadow = "0px 0px 0px";
    document.getElementById('a28').style.boxShadow = "0px 0px 0px";
    document.getElementById('a29').style.boxShadow = "0px 0px 0px";
    document.getElementById('a30').style.boxShadow = "0px 0px 0px";
}

function limpar_b(){
    document.getElementById('b1').style.boxShadow = "0px 0px 0px";
    document.getElementById('b2').style.boxShadow = "0px 0px 0px";
    document.getElementById('b3').style.boxShadow = "0px 0px 0px";
    document.getElementById('b4').style.boxShadow = "0px 0px 0px";
    document.getElementById('b5').style.boxShadow = "0px 0px 0px";
    document.getElementById('b6').style.boxShadow = "0px 0px 0px";
    document.getElementById('b7').style.boxShadow = "0px 0px 0px";
    document.getElementById('b8').style.boxShadow = "0px 0px 0px";
    document.getElementById('b9').style.boxShadow = "0px 0px 0px";
    document.getElementById('b10').style.boxShadow = "0px 0px 0px";
    document.getElementById('b11').style.boxShadow = "0px 0px 0px";
    document.getElementById('b12').style.boxShadow = "0px 0px 0px";
    document.getElementById('b13').style.boxShadow = "0px 0px 0px";
    document.getElementById('b14').style.boxShadow = "0px 0px 0px";
    document.getElementById('b15').style.boxShadow = "0px 0px 0px";
    document.getElementById('b16').style.boxShadow = "0px 0px 0px";
    document.getElementById('b17').style.boxShadow = "0px 0px 0px";
    document.getElementById('b18').style.boxShadow = "0px 0px 0px";
    document.getElementById('b19').style.boxShadow = "0px 0px 0px";
    document.getElementById('b20').style.boxShadow = "0px 0px 0px";
    document.getElementById('b21').style.boxShadow = "0px 0px 0px";
    document.getElementById('b22').style.boxShadow = "0px 0px 0px";
    document.getElementById('b23').style.boxShadow = "0px 0px 0px";
    document.getElementById('b24').style.boxShadow = "0px 0px 0px";
    document.getElementById('b25').style.boxShadow = "0px 0px 0px";
    document.getElementById('b26').style.boxShadow = "0px 0px 0px";
    document.getElementById('b27').style.boxShadow = "0px 0px 0px";
    document.getElementById('b28').style.boxShadow = "0px 0px 0px";
    document.getElementById('b29').style.boxShadow = "0px 0px 0px";
    document.getElementById('b30').style.boxShadow = "0px 0px 0px";
}