var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $autor = $('#autor'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first(),
    $todo = $('#contenedor');
//var mql = window.matchMedia("(min-width:800px)");

function mostrarFormulario() {
    $('#publicar_nav a').toggleClass('disabled');
    $form.slideToggle();
    $todo.slideToggle();
    return false;
}


function agregarPost() {
    var url = $url.val(),
        titulo = $titulo.val(),
        autor = $autor.val(),
        $clone = $post.clone();

    $clone.find('.titulo_item a')
        .text(titulo)
        .attr('href', url);
    $clone.find('.autor_item a')
        .text(autor);

    $clone.hide();

    $list.prepend($clone);
    mostrarFormulario();
    $clone.fadeIn();

    return false;
}

//eventos
$button.click(mostrarFormulario);
$form.on('submit', agregarPost);