export interface IcurrentTVData {
  name: string,
  runtime: number,
  schedule: {
    time: string,
    days: [
      string
    ],
  }
  officialSite: string,
  rating: number,
  network: {
    name: string,
  }
  image: {
    medium: string,
  }
  summary: string
}
