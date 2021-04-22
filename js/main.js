// Chat

$('#message').keyup(function (e) {
    if (e.keyCode === 13) {
        let text = $('#message').val();
        let username = $('#chat-username').val();
        let date = new Date();
        let dateFormat = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        let paragraph = $('<p class="chat-info">' + username + '  ' + '<small class="chat-txt">' + dateFormat + '</small>' + '</p>' + '<p class="chat-txt">' + text + '</p>');
        $('#chat-box').append(paragraph) &&
            $(this).val('');
    };
    if (e.keyCode === 27) {
        $(this).val('');
    };
});

$('#send-btn').click(function (e) {
    let text = $('#message').val();
    let username = $('#chat-username').val();
    let date = new Date();
    let month = date.getMonth() + 1;
    let dateFormat = date.getDate() + '.' + month + '.' + date.getFullYear() + '.' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    let paragraph = $('<p class="chat-info">' + username + '  ' + '<small class="chat-txt">' + dateFormat + '</small>' + '</p>' + '<p class="chat-txt">' + text + '</p>');
    $('#chat-box').append(paragraph) &&
        $('#message').val('');
});

// Register

$('.form').submit(function (e) {
    let a = document.forms['registration-form']['password'].value;
    let b = document.forms['registration-form']['password-retyped'].value;

    if (a != b) {
        alert('Passwords do not match!');
        return false;
    }
});