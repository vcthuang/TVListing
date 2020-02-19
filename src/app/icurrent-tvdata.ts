interface IcurrentTVData {
  score: number,
  show: {
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
}

export interface ItvListingData extends Array<IcurrentTVData>{}
