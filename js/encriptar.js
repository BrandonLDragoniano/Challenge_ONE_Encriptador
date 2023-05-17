  const input1 = document.querySelector('.borderless');
  const input2 = document.getElementById('input2');
  const p2 = document.querySelector(".p2")
  const muestraMensaje = document.querySelector('.muestraMensaje');
  var encriptado = false;
  var desencriptado = false;



  input2.addEventListener('input', () => {
    if (input2.value === '') {
      muestraMensaje.style.visibility = 'visible';
      p2.style.visibility = 'visible'
    } else {
      muestraMensaje.style.visibility = 'hidden';
      p2.style.visibility = 'hidden'
    }
  });
  input1.addEventListener('input', () => {
    if (input1.value === '') {
      muestraMensaje.style.visibility = 'visible';
      p2.style.visibility = 'visible'
    } else {
      muestraMensaje.style.visibility = 'hidden';
      p2.style.visibility = 'hidden'
    }
  });


  input1.addEventListener('input', () => {
    input2.value = input1.value;
  });

  input2.addEventListener('input', () => {
    input1.value = input2.value;
  });

  const p1 = document.querySelector('.minusculas');

  input1.addEventListener('input', () => {
    if (/[A-ZáéíóúÁÉÍÓÚ\d$@$!%*?&]/.test(input1.value)) {
      p1.style.color = 'red';
    } else {
      p1.style.color = 'black';
    }
  });

  function encriptar() {
    if (/[^a-z\s]/.test(input2.value)) {
      alert('Error: Solo letras minúsculas sin acentos');
      return;
    }
    let txt = input2.value;
    if(encriptado == false){
      txt = txt.replace(/e/g, 'enter');
      txt = txt.replace(/i/g, 'imes');
      txt = txt.replace(/a/g, 'ai');
      txt = txt.replace(/o/g, 'ober');
      txt = txt.replace(/u/g, 'ufat');
    }
    
    encriptado = true;
    desencriptado = false;
    input2.value = txt;

    input1.value = txt;

  }

  function desencriptar() {
    if (/[^a-z\s]/.test(input2.value)) {
      alert('Error: Solo letras minúsculas sin acentos');
      return;
    }
    let txt = input2.value;
    if (desencriptado == false) {
      txt = txt.replace(/enter/g, 'e');
      txt = txt.replace(/imes/g, 'i');
      txt = txt.replace(/ai/g, 'a');
      txt = txt.replace(/ober/g, 'o');
      txt = txt.replace(/ufat/g, 'u');
    }
    desencriptado = true;
    encriptado = false;
    input2.value = txt;
    input1.value = txt; 
  }

  function clipboard() {   
    var copyText = document.getElementById('input2');  
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }

  function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }


}

