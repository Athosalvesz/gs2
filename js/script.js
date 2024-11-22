document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita o envio do formulário para demonstração
  
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;
      
      if (nome && email && mensagem) {
        alert('Formulário enviado com sucesso!');
        form.reset(); // Limpa o formulário
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  });