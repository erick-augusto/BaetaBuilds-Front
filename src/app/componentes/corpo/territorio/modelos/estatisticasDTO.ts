export interface EstatisticasDTO {
    id?: number,
    totalAptosFeitos: number,
    totalAptosNaoFeitos: number,
    totalTerritoriosFeitos: number,
    totalTerritoriosNaoFeitos: number,
    totalDias: number,
    mediaAptosPorDia: number
}