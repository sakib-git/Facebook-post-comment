const btn = document.getElementById('btn');

btn.addEventListener('click', function (){
  const inputF = document.getElementById('inputF');

  const inputFValue = inputF.value;
  const dtext = document.getElementById('dText');

  const p = document.createElement('p');
  dtext.appendChild(p);
  p.innerText = inputFValue


  inputF.value = '';

  p.addEventListener('click', () => {
    p.remove()
  })
})