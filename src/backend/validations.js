export function validateRegister(data) {
  if (
    data.name == undefined ||
    data.name == '' ||
    data.phone == undefined ||
    data.phone == '' ||
    data.email == undefined ||
    data.email == '' ||
    data.password == undefined ||
    data.password == ''
  ) {
    return 'Todos os campos devem ser preenchidos';
  } else if (data.password.toString().length < 8) {
    return 'Sua senha deve ter no mínimo 8 caracteres';
  } else if (data.phone.toString().length !== 11) {
    return 'Forneça um telefone válido';
  } else if (data.avatar == null) {
    return 'Forneça uma foto para seu perfil';
  } else {
    return true;
  }
}

export function validateLogin(data) {
  if (
    data.email == undefined ||
    data.password == undefined ||
    data.email == '' ||
    data.password == ''
  ) {
    return 'Todos os campos devem ser preenchidos';
  } else {
    return true;
  }
}

export function validateHelp(data) {
  if (
    data.title == undefined ||
    data.description == undefined ||
    data.title == '' ||
    data.description == ''
  ) {
    return 'Todos os campos devem ser preenchidos';
  } else {
    return true;
  }
}

export function validateProfile(data) {
  if (data.name == '' || data.email == '') {
    return 'Todos os campos devem ser preenchidos';
  } else {
    return true;
  }
}
