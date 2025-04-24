class Food {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number

  constructor(
    id: number,
    nome: string,
    descricao: string,
    foto: string,
    porcao: string,
    preco: number
  ) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.foto = foto
    this.porcao = porcao
    this.preco = preco
  }
}

export default Food
