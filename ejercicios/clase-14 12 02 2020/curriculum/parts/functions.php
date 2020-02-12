<?php
    
    function generarSeccion($titulo, $contenido) {
        $html = "<section>";
        $html .= "<h1>{$titulo}</h1>";
        $html .= $contenido; 
        return $html . "</section>";
    }

    function generarParrafo($contenido) {
        return "<p>{$contenido}</p>";
    }

    function generarLista($arreglo) {
        $html = "<ul>";
        foreach($arreglo as $valor) {
            $html .= "<li>{$valor}</li>";
        }
        return $html . "</ul>";
    }

    function generarEstudio($lugar, $titulo, $estado = "Finalizado") {
        $html = "<article>";
        $html .= "<p><strong>{$lugar}</strong> - {$titulo}</p>";
        return $html .= "<span>{$estado}</span></article>";          
    }

    function generarExperiencia($lugar, $titulo, $tiempo) {
        $html = "<article>";        
        return $html .= "<p><strong>{$lugar}</strong> - {$titulo} - {$tiempo}</p>";        
    }