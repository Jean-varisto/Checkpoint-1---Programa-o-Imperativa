function microondas(tempo,tempoDePreparo) {
    if (tempo / tempoDePreparo == 1) {
        console.log("Prato pronto, bom apetite!!!");
    } else if (tempo / tempoDePreparo >= 2 && tempo / tempoDePreparo < 3) {
            console.log("O prato queimou");
    } else if (tempo / tempoDePreparo >= 3) {
        console.log("kabumm");
    } else {
        console.log("tempo insuficiente");
    }
}


function escolha(comida, tempo) {
    if (comida == 1){
        console.log("você escolheu PIPOCA!!!");
        let tempoDePreparo=10;
        microondas(tempo,tempoDePreparo)
    } else if (comida == 2){
        console.log("você escolheu MACARRÃO!!!");
        let tempoDePreparo=8;
        microondas(tempo,tempoDePreparo)
    } else if (comida == 3){
        console.log("você escolheu CARNE!!!");
        let tempoDePreparo=15;
        microondas(tempo,tempoDePreparo)
    } else if (comida == 4){
        console.log("você escolheu FEIJAO!!!");
        let tempoDePreparo=12;
        microondas(tempo,tempoDePreparo)
    } else if (comida == 5){
        console.log("você escolheu BRIGADEIRO!!!");
        let tempoDePreparo=8;
        microondas(tempo,tempoDePreparo)
    } else{
        console.log("OPÇÃO INVALIDA!!!!");
    }
}

escolha (1,10)
// 1:
console.log("testes____________________________PIPOCA");
escolha(1,7)
escolha(1,10)
escolha(1,20)
escolha(1,30)
// 2:
console.log("testes____________________________MACARRÃO");
escolha(2,4)
escolha(2,8)
escolha(2,16)
escolha(2,24)
console.log("testes____________________________CARNE");
// 3:
escolha(3,10)
escolha(3,15)
escolha(3,30)
escolha(3,45)
console.log("testes____________________________FEIJÃO");
// 4:
escolha(4,8)
escolha(4,12)
escolha(4,24)
escolha(4,36)
console.log("testes____________________________BRIGADEIRO");
// 5:
escolha(5,4)
escolha(5,8)
escolha(5,16)
escolha(5,24)
// 6 ou outros:
console.log("testes____________________________ERROS");
escolha(6,2)
escolha(0,2)
escolha(8,20) 