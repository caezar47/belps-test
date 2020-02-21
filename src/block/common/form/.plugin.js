var password = document.getElementById("signup[password]"), 
	confirm_password = document.getElementById("signup[confirm_password]");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
/*
$("#form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
	e.preventDefault();
	var form_data = $(this).serialize(); // Собираем все данные из формы
	$.ajax({
		type: "POST", // Метод отправки
		url: "js/server-ok.json", // Путь до php файла отправителя
		data: form_data, 
		success: function () {
			// Код в этом блоке выполняется при успешной отправке сообщения
			alert("Ваше сообщение отправлено!");
		}
	});
});  */