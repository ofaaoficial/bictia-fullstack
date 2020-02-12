<?php

$arrayNumeros = [54, 1, 62, 533, 36, 234, 6];

echo '---------- <br>';
echo 'Bucle For <br>';
echo '---------- <br>';

for($i = 1; $i < count($arrayNumeros); $i++) {
    echo $arrayNumeros[$i] . '<br>';
}


echo '---------- <br>';
echo 'Bucle While <br>';
echo '---------- <br>';

$condicional = 0;

while($condicional < 3) {
    echo "Ejecucion numero $condicional <br>";
    $condicional++;
}

echo '---------- <br>';
echo 'Bucle Do While <br>';
echo '---------- <br>';

$condicional = 0;

do{
    $condicional++;
    echo "Ejecucion numero $condicional <br>";    
}while($condicional < 1);