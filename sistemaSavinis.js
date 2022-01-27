let dataEvento = new Date ('02/25/2022')
let dataHoje = new Date ()

console.log (dataEvento)

if (dataEvento > dataHoje) {
    console.log ("Evento confirmado")
    
    let listaParticipantes = [ "Pessoa1", "Pessoa2", "Pessoa3", "Pessoa4", "Pessoa5"]
    for (let contador = 0; contador < listaParticipantes.length; contador++){
        console.log (listaParticipantes [contador])
    }
} else {
    console.log ("Cadastro não permitido! Verificar data")
}
 let listaParticipantes = 4
 if (listaParticipantes > 5 ) {
     console.log ("Limite máximo de participantes atingidos!")
 } else{
 let idade = 18
 console.log ("Qual a idade do participante?" [idade])
 if (idade > 17) {
     console.log ("Bem vindo ao evento!")
 } else {
     console.log ("Cadastro não permitido, idade mínima não atingida!")
 }
} 
