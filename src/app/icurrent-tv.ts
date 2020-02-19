export interface ICurrentTV {
  name: string
  runtime: number
  network: string
  time: string
  days: string[]
  image: string
  officicalSite: string
  summary: string
}

export interface ItvListing extends Array<ICurrentTV>{}