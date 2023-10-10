$(document).ready(function () {
  // Função para alternar a exibição do menu mobile
  const mobileMenuBtn = $('#mobile-menu-btn');
  const mobileMenuElement = $('#mobile-menu');

  function toggleMenu() {
    mobileMenuElement.toggleClass('open');
  }

  // Associa a função ao clique no botão do menu mobile
  mobileMenuBtn.click(toggleMenu);

  // Seleção de elementos do formulário e máscara para telefone
  const formElement = $('form');
  const inputTelefone = $('#telefone');

  // Aplicação da máscara de telefone
  inputTelefone.mask('(00) 00000-0000');

  // Validação do formulário
  formElement.validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      }
    }
  });
});
