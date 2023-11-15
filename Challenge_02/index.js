const challenge_string = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

/*
# = +1
@ = -1
* = Multiplica por si mismo
& = Imprime el valor actual
*/

function compiler(string) {
    
    var value = 0;
    var result = '';

    for (var i = 0; i < string.length; i++) {
        
        if (string[i] === '#'){
            value += 1;
        }

        else if (string[i] === '@'){
            value -= 1;
        }

        else if (string[i] === '*'){
            value *= value;
        }

        else if (string[i] === '&'){
            result += value;
        }

    }

    return result;

}

const solution = compiler(challenge_string);
console.log(solution);