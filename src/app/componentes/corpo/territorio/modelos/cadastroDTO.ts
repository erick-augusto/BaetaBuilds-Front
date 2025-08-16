export interface CadastroDTO {
    id?: number,
    nomeTorre?: string,
    endereco: string,
    cep: string,
    totalAptosTorre: number,
    primAndIni: number,
    primAndFim: number,
    ultAndIni?: number,
    ultAndFim?: number
}