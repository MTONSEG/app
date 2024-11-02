import { headers } from '@/services/api.config'
import { fetcher } from '@/services/axios.config'
import type { IGetDataParams } from '@/types/services.types'
import { AxiosResponse } from 'axios'

export const getData = <T>({ url }: IGetDataParams): Promise<AxiosResponse<T, any>> => {
  return fetcher.get<T>(url, { headers })
}
