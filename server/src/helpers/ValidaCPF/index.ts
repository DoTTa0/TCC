const verificaCPFInvalidos = (cpf: string) => {
    const cpfsInvalidos = [
        '11111111111',
        "22222222222",
        '33333333333',
        "44444444444",
        '55555555555',
        "66666666666",
        '77777777777',
        "88888888888",
        '99999999999',
        "00000000000"
    ]

    return cpfsInvalidos.indexOf(cpf) === -1
}


const somaNumerosCPF = (cpf: string, totalDeDigitos: number, peso: number): number =>{
    let soma = 0
    for(let indice=1; indice<=totalDeDigitos; indice++){
        soma += parseInt(cpf.substring(indice-1,indice)) * (peso-indice)
    }

    return soma
}

const verificaDigito = (cpf: string, totalDeDigitos: number, peso: number,digitoDeverificacao: number): boolean =>{
    const soma = somaNumerosCPF(cpf, totalDeDigitos,peso)
    let resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0;

    return resto === digitoDeverificacao
}

const verificaPrimeiroDigito = (cpf: string): boolean =>{
    const peso = 11
    const totalDeDigitos = 9
    let digitoDeverificacao =  parseInt(cpf.substring(9,10))
    //console.log(digitoDeverificacao)

    return verificaDigito(
        cpf,
        totalDeDigitos,
        peso,
        digitoDeverificacao
    )

}

const verificaSegundoDigito = (cpf: string): boolean =>{
    const peso =12
    const totalDeDigitosSegundaParte = 10
    let digitoDeverificacao = parseInt(cpf.substring(10,11))
    
    return verificaDigito(
        cpf,
        totalDeDigitosSegundaParte,
        peso,
        digitoDeverificacao
    )
}

 const validaCPF = (cpf: string): Promise<[boolean]> =>{
    return Promise.all([
        verificaCPFInvalidos(cpf) &&
        verificaPrimeiroDigito(cpf) &&
        verificaSegundoDigito(cpf)]
    )
}

export {
    validaCPF
} 