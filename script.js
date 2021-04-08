const circle_c = document.getElementById("circle_c");
const circle_o = document.getElementById("circle_o");

circle_c.addEventListener('click', () => {
  document.body.classList.remove('darkmode');
  document.body.classList.add('lightmode');
  localStorage.setItem('theme', 'light');
})

circle_o.addEventListener('click', () => {
  document.body.classList.add('darkmode');
  document.body.classList.remove('lightmode');
  localStorage.setItem('theme', 'dark');
})

const saveTheme = () =>{
  if(localStorage.getItem('theme') === 'dark'){
      document.body.classList.remove('ligthmode');
      document.body.classList.add('darkmode');
  }else{
      document.body.classList.remove('darkmode');
  }
}

saveTheme();

