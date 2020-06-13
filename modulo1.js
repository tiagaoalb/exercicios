// Exercicio 1

function enderecoUsuario(endereco) {
	var endereco = {
		rua: "Rua dos pinheiros",
		numero: 1293,
		bairro: "Centro",
		cidade: "São Paulo",
		uf: "SP",
	};
	console.log(
		"O usuário mora em",
		endereco.cidade,
		"/",
		endereco.uf,
		", no bairro",
		endereco.bairro,
		", na rua",
		endereco.rua,
		"com nº",
		endereco.numero
	);
}
enderecoUsuario();

// Exercicio 2

function pares(x, y) {
	while (x < y) {
		if (x % 2 == 0) {
			console.log(x);
		}
		x++;
	}
}
pares(32, 321);

// Exercicio 3

function temHabilidade(skills) {
	if (skills.indexOf("Node") == 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false

// Exercicio 4

function experiencia(anos) {
	if (anosEstudo <= 1) {
		console.log("Iniciante");
	} else if (anosEstudo <= 3) {
		console.log("Intermediário");
	} else if (anosEstudo <= 6) {
		console.log("Avançado");
	} else if (anosEstudo >= 7) {
		console.log("Jedi Master");
	} else {
		console.log("Não existe!");
	}
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

// Exercicio 5

var usuarios = [
	{
		nome: "Diego",
		habilidades: ["Javascript", "ReactJS", "Redux"],
	},
	{
		nome: "Gabriel",
		habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
	},
];

function candidato(array) {
	for (var value of array) {
		console.log(
			"O",
			value.nome,
			"possui as habilidades: ",
			value.habilidades.join(", ")
		);
	}
}
candidato(usuarios);
