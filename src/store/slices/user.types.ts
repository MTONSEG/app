export interface IUserState {
  options: IOption[]
  links: ISocialLink[]
}

export interface IOption {
  id: string
  title: string
  value: string
}

export interface ISocialLink {
  id: string
  url: string
  option: IOption | null
}

export interface ILinkOption {
  id: string
  option: IOption | null
}
