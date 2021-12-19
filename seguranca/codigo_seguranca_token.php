<?php

function base64UrlEncode($data){
    return str_replace(['+', '/', '='], ['-','_',''], base64_encode($data));
}

$header = base64UrlEncode('{"alg": "HS256", "typ": "JWT"}');
$payload = base64UrlEncode('{"sub": "'.  md5(time()).'", "nome": "Ruan Marques", "iat": '.time().'}');
$signature = base64UrlEncode(
        hash_hmac('sha256', $header.'.'.$payload, 'token', true)
);
echo $header.'.'.$payload.'.'.$signature;

// Só não conseguimos integrar com o nosso aplicativo