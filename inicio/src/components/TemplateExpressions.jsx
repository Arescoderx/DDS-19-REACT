import React from 'react'

const TemplateExpressions = () => {
  let nome = 'João'
  let aluno = {
    nome: 'Jao', 
    turma: 'DDS-01',
    curso: 'Desenvolvimento de Sistemas',
    idade: 16
  }

  console.log(aluno)
  return (
    <div>
      <h1>O nome do Jogador é {nome}</h1>
      <p>O nome do aluno é {aluno.nome}, faz o curso de {aluno.curso} na turma {aluno.turma} e tem {aluno.idade} anos</p>
      <p>Seu nome tem {aluno.nome.length} letras</p>
      <p>Seu nome em maiúsculo é {aluno.nome.toUpperCase()}</p>
      <p>Seu nome em minúsculo é {aluno.nome.toLowerCase()}</p>
    </div>
  )
}

export default TemplateExpressions