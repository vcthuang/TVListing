export interface IcurrentTVData {
  name: string,
  runtime: number,
  network: {
    name: string,
  }
  schedule: {
    time: string,
    days: string[],
  }
  officialSite: string,
  
  image: {
    medium: string,
  }
  summary: string
}
