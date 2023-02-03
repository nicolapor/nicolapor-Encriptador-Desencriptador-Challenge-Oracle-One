var input = document.querySelector(".input");
var output = document.querySelector(".output");

    function btnEncriptar(){
        let txtEncriptado = encripta();
        let hideMuneco = document.querySelector(".munecoInfo");
        output.value = txtEncriptado;
        input.value = "";
        hideMuneco.style.display = "none";
    }

    function encripta() {
        let cadenaCifrada = "";
        for (let posicion = 0; posicion < input.value.length; posicion++) {
            switch (input.value[posicion]) {
                case "a": 
                    cadenaCifrada += "ai";
                    break;

                case "e": 
                    cadenaCifrada += "enter";
                    break;

                case "i": 
                    cadenaCifrada += "imes";
                    break;

                case "o": 
                    cadenaCifrada += "ober";
                    break;

                case "u": 
                    cadenaCifrada += "ufat";
                    break;

                default:
                    cadenaCifrada += input.value[posicion]
            }
        }
        return cadenaCifrada;
    }

    function btnDesencriptar(){
        let txtEncriptado = desencriptar(input.value);
        let hideMuneco = document.querySelector(".munecoInfo");
        output.value = txtEncriptado;
        input.value = "";
        hideMuneco.style.display = "none";
    }

    function desencriptar(stringDesencripta){
        let matriz = [["a", "ai"], ["e","enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
        stringDesencripta = stringDesencripta.toLowerCase();

        for (let i = 0; i < matriz.length; i++){
            if(stringDesencripta.includes(matriz[i][0])){
                stringDesencripta = stringDesencripta.replaceAll(matriz[i][1], matriz[i][0])
            }
        }
        return stringDesencripta;
    }

    function btnCopiar (){
        let copiaTexto = document.querySelector(".output");
        copiaTexto.select();
        copiaTexto.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copiaTexto.value);
    }