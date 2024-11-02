import { headers } from '@/services/api.config'
import { fetcher } from '@/services/axios.config'
import type { IGetDataParams } from '@/types/services.types'
import { AxiosResponse } from 'axios'

export const postData = <T>({ url }: IGetDataParams): Promise<AxiosResponse<T, any>> => {
  return fetcher.post<T>(url, null, { headers })
}
