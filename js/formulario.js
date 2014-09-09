var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $autor = $('#autor'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first(),
    $todo = $('#contenedor');
//var mql = window.matchMedia("(min-width:800px)");
if (localStorage.getItem('autosave')) {
    $titulo.val(sessionStorage.getItem('titulo'));
    $url.val(sessionStorage.getItem('url'));
}
//setTimeOut
var id = setInterval(function() {
    sessionStorage.setItem('titulo', $titulo.val());
    sessionStorage.setItem('url', $url.val());
}, 1000);

function mostrarFormulario() {
    $('#publicar_nav a').toggleClass('disabled');
    $form.slideToggle();
    $todo.slideToggle();
    return false;
}


function agregarPost() {
    var titulo = $titulo.val(),
        url = $url.val(),
        autor = $autor.val(),
        clone = $post.clone();

    clone.find('.titulo_item a')
        .text(titulo)
        .attr('href', url);
    clone.find('.autor_item a')
        .text(autor);

    clone.hide()

    $list.prepend(clone)
    mostrarFormulario();
    $titulo.val('');
    $url.val('');
    $autor.val('');
    clone.fadeIn();

    return false
}

//eventos
$button.click(mostrarFormulario);
$form.on('submit', agregarPost);