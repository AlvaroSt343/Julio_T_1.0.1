var remplaza = /\+/gi;
var url = window.location.href;

url = unescape(url);
url = url.replace(remplaza, " ");
url = url.toUpperCase();
function obtener_valor(variable) {
  var variable_may = variable.toUpperCase();
  var variable_pos = url.indexOf(variable_may);

  if (variable_pos != -1) {
    var pos_separador = url.indexOf("&", variable_pos);

    if (pos_separador != -1) {
      return url.substring(
        variable_pos + variable_may.length + 1,
        pos_separador
      );
    } else {
      return url.substring(variable_pos + variable_may.length + 1, url.length);
    }
  } else {
    return "NO_ENCONTRADO";
  }
  
}
