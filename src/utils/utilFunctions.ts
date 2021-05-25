export const normalizeCep = (value: string) => {
  //restringe a digitação do campo para aceitar apenas números
  value = value.replace(/\D/g,"")
  //limita a quantidade de números digitados para no máximo 08 dígitos
  if (value.length > 8) {
    value = value.slice(0, -1)
  }

  //sequência para aplicaçãod da máscara de CEP - exemplo: 01.001-001
  value = value.replace(/(\d{2})(\d)/, "$1.$2")
  value = value.replace(/(\d{3})(\d)/, "$1-$2")
  return value
}

export const normalizeCpf = (value: string) => {
  //restringe a digitação do camregister, handleSupo para aceitar apenas números
  value = value.replace(/\D/g,"")
  //limita a quantidade de números digitados para no máximo 11 dígitos
  if (value.length > 11) {
    value = value.slice(0, -1)
  }

  //sequência para aplicação da máscara de CPF exemplo: 000.000.000-01
  value = value.replace(/(\d{3})(\d)/, "$1.$2")
  value = value.replace(/(\d{3})(\d)/, "$1.$2")
  value = value.replace(/(\d{3})(\d)/, "$1-$2")
  return value
}