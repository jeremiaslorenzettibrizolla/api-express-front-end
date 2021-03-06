const lista = document.getElementById('growdevers');

axios.defaults.baseURL = 'http://localhost:8080';

axios
  .get('/growdevers')
  .then(response => {
    response.data.forEach(item => {
      lista.innerHTML += 
      `
        <ol class="list-group list-group row col-3 me-auto">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div>
              <b>Nome:</b> ${item.nome}</br>
              <b>Turma:</b> ${item.turma}</br>
              <b>Cidade:</b> ${item.cidade}
            </div>
            <span class="badge bg-primary rounded-pill">${item.idade} Anos</span>
          </li>
        </ol>
      `;
    });
  })
  .catch(error => console.log(error));

async function salvar(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const turma = document.getElementById('turma').value;
  const cidade = document.getElementById('cidade').value;

  const { data } = await axios.post('/growdevers', {
    nome,
    idade,
    turma,
    cidade
  });

  console.log(data);

  lista.innerHTML += `${data.nome} <br/>`;

  
}