function msg() {
    // Exibe uma mensagem de carregamento
    var feedbackElement = document.getElementById('feedback');
    feedbackElement.style.display = 'block';
    feedbackElement.style.color = 'black';
    feedbackElement.innerText = 'Enviando mensagem...';

    // Simula o envio de uma mensagem
    setTimeout(function() {
        // Simula uma resposta do servidor
        var success = true; // Muda para false para simular uma falha

        if (success) {
            feedbackElement.style.color = 'blue';
            feedbackElement.innerText = 'Mensagem enviada com sucesso!';
        } else {
            feedbackElement.style.color = 'red';
            feedbackElement.innerText = 'Ocorreu um erro ao enviar a mensagem. Tente novamente.';
        }

    }, 2000); // Simula um atraso de 2 segundos no envio
}