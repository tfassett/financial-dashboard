export interface Earnings {
  actualEPS: number;
  consensusEPS: number;
  estimatedEPS: number;
  announceTime: string;
  numberOfEstimates: number;
  EPSSurpriseDollar: number;
  EPSReportDate: string;
  fiscalPeriod: string;
  fiscalEndDate: string;
  yearAgo: number;
  yearAgoChangePercent: number;
  estimatedChangePercent: number;
  symbolId: number;
}