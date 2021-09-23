let submitButton = document.getElementById('submitButton'); 

submitButton.addEventListener('click', async function(event) {
    
    let name = document.getElementById("name").value;
    let passwordValue = document.getElementById("password").value;
    let checkPassword = document.formName1.checkPasswordUser.value;
    let check = 0;
    document.querySelector("#errorName").textContent = '';
    document.querySelector("#errorPassword").textContent = '';
    document.querySelector("#errorCheckPasword").textContent = '';
    
    if(name == '' || name.length == 0 || name.match(/\s+/) != null || name.match(/\d+/))
    {
        document.querySelector("#errorName").textContent = 'Введите имя(не использовать пробелы и числа)';
        check = 1;
    }
    if(passwordValue == '' || passwordValue.length == 0 || passwordValue.match(/\s+/) != null || passwordValue.length < 8)
    {
        document.querySelector("#errorPassword").textContent = 'Введите пароль(8 значений, без пробелов)';
        check = 1;
    }
    if(checkPassword == '' || checkPassword.length == 0 || checkPassword.match(/\s+/) != null || checkPassword.length < 8 || passwordValue != checkPassword)
    {
        document.querySelector("#errorCheckPasword").textContent = 'Повторите пароль повторно';
        check = 1;
    }
    if(check != 1)
    {
        let data = {
            login: name,
            password: passwordValue       
        }
    
        const serverUrl = 'https://www.google.by/';
    
        try {
            let response = await fetch(serverUrl, {
                method: 'POST',
                body: JSON.stringify(data)
            });
        
            let text = await response.text();
            console.log(text);
            
            alert('Регистрация успешна!');
        } catch(error) {
            console.log(error);
            alert('Сервер не отвечает.');
        }
    }
});

function clearError(str)
{
    document.querySelector("#" + str + "").textContent = '';
}