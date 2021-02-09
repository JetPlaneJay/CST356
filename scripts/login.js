function validate () {
    document.getElementById('fname-error').style.visibility = 'hidden';
    document.getElementById('password-error').style.visibility = 'hidden';
    let fnameLogin = document.getElementById('fname').value;
    let passwordLogin = document.getElementById('password').value;

    console.debug('First name: ' + fnameLogin);

    console.debug('Password: ' + passwordLogin);

    if (fnameLogin == '') {
        document.getElementById('fname-error').style.visibility = 'visible';
    }

    if (passwordLogin == '') {
        document.getElementById('password-error').style.visibility = 'visible';
    }

    document.cookie = 'username=${fnameLogin} ${passwordLogin}; expires=31 Dec 2024 12:00:00 UTC; path=/';

}