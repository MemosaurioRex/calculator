function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}
function esigual(){
    document.form.textview.value = eval(document.form.textview.value);
}
function borrartodo(){
    document.form.textview.value = "";
}
function borraruno(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}