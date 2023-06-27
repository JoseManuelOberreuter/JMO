function copyCode(button) {
    var codeContent = button.parentNode.querySelector('.code-content');
    var range = document.createRange();
    range.selectNode(codeContent);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  
    button.textContent = '¡Copiado!';
  }
  