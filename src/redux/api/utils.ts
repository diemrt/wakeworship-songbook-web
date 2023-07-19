import configJson from './configurations.json'
export interface ApiEndpoint {
  [key: string]: string
}
export interface EndPoint {
    [key: string]: ApiEndpoint
}

export const ApiCurrentEnviroment = () => {
  const env = process.env.REACT_APP_ENVIRONMENT
  if(typeof env === "undefined")
    throw new Error("Missing enviroment variable")

  return env
}

export function buildReadableError(status = 500, err: Error) {
    return {
      error: {
        status: status,
        data: err.message
      }
    }
  }
  

//The API url memoized
const getRootUrl = (endpoint: ApiEndpoint) => {
    const { protocol, host, port, prefix, version } = endpoint

    let apiUrl = protocol + '://' + host
    apiUrl = port ? `${apiUrl}:${port}` : apiUrl
    apiUrl = prefix ? `${apiUrl}/${prefix}` : apiUrl
    apiUrl = version ? `${apiUrl}/v${version}` : apiUrl
    return apiUrl
}


const endPoints: { [key: string]: EndPoint } = configJson.endPoints

export const apiRootUrl = getRootUrl(endPoints[ApiCurrentEnviroment()].api);

export const LIST_DEFAULT_ITEMS_PER_PAGE = 10

export async function asyncFnWrapper<T>(
  params: T, 
  fetchFn: Function
) {
  const options = await fetchFn(params)
  return options.data 
}