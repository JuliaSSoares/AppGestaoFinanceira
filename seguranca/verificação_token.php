<?php

    function base64UrlEncode($data){
        return str_replace(['+', '/', '='], ['-','_',''], base64_encode($data));
    }

    $token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    $parts = explode('.',$token);

    $signature = base64UrlEncode(
        hash_hmac('sha256', $parts[0].'.'.$parts[1], 'token', true)
    );

    if($signature = $parts[2]){

        $payload = json_decode(
            base64_decode($parts[1])
        );

        echo $payload->nome;

        }else{ 
            echo 'Token inválido';
        }

    // Só não conseguimos integrar com o nosso aplicativo