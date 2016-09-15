// Ou podemos declarar o nome explicitamente...
// define('myModule', function () {
define(function () {
    return {
        minus: function (a, b) {
            return (+a) + (+b);
        }
    };
});
