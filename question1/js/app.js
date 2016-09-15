requirejs.config({
    "baseUrl": "js/modules",
    "paths": {
        "jquery": "http://code.jquery.com/jquery-2.1.1.min",
        "main": "../main"
    }
});
 
// Chamando módulo principal para iniciar a aplicação
requirejs(["main"]);