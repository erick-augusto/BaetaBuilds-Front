export interface ApartamentoDTO {
    aptoID: number;
    numApto: number;
    dataEntrega: string | null;
    nomeResponsavel: string | null;
}

export interface TorreApartamentosDTO {
    torreID: number;
    nomeTorre: string;
    endereco: string;
    cep: string;
    totalAptosTorre: number;
    apartamentos: ApartamentoDTO[];
}
