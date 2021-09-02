function microondas(alimento, tempo) {
    switch (alimento){
        case "Pipoca":
            if (tempo < 10) {
                console.log("tempo insuficiente");
            } else if (tempo > 20 && tempo < 31) {
                console.log("A comida queimou");
            } else if (tempo > 30){
                console.log("Kabumm");
            } else {
                console.log("Prato pronto, bom apetite!!!");            
            }           
            break;

        case "Macarrão":
            if (tempo < 8) {
                console.log("tempo insuficiente");
            } else if (tempo > 16 && tempo < 25) {
                console.log("A comida queimou");
            } else if (tempo > 24){
                console.log("Kabumm");
            } else {
                console.log("Prato pronto, bom apetite!!!");            
            }
            break;    

        case "Carne":
            if (tempo < 15) {
                console.log("tempo insuficiente");
            } else if (tempo > 30 && tempo < 46) {
                console.log("A comida queimou");
            } else if (tempo > 45){
                console.log("Kabumm");
            } else {
                console.log("Prato pronto, bom apetite!!!");            
            }
            break;       
            
        case "Feijão":
            if (tempo < 12) {
                console.log("tempo insuficiente");
            } else if (tempo > 24 && tempo < 37) {
                console.log("A comida queimou");
            } else if (tempo > 36){
                console.log("Kabumm");
            } else {
                console.log("Prato pronto, bom apetite!!!");            
            }
            break;     

        case "Brigadeiro":
            if (tempo < 8) {
                console.log("tempo insuficiente");
            } else if (tempo > 16 && tempo < 25) {
                console.log("A comida queimou");
            } else if (tempo > 24){
                console.log("Kabumm");
            } else {
                console.log("Prato pronto, bom apetite!!!");            
            }
            break;    
        default:
            console.log("Prato inexistente");    
            break;    
    }
}
console.log(` Opções:
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 
`);
microondas("Feijão", 36)