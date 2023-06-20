const validate = (form) => {
    var errors = {};

    if (!form.name) errors.name = 'Se requiere nombre'
    else if (form.name.length > 80) errors.name = 'Nombre muy largo (+ de 80 caracteres)'

    if(!form.description) errors.description = 'Se requiere descripcion'
    else if (form.description.length > 1300) errors.description = 'La descripcion tiene que tener menos de 1300 caraceters!'

    if(!form.rating) errors.rating = 'se requiere Rating!';

    if (!form.released) errors.released = 'Se requiere Fecha de Lanzamiento!';
    if(!form.image) errors.image = 'Necesitas cargar una imagen'
    if(form.genres.length < 1) errors.genres = 'Se requiere poner al menos 1 genero!'
    if(form.platforms.length < 1) errors.platforms = 'Se require al menos 1 plataforma!'

    return errors;
}

export default validate;