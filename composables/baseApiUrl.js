export default function useBaseAPI() {

  const config = useRuntimeConfig()


  // const baseAPIURL = config.public.BASE_API
  const baseAPIURL = config.public.baseUrl

  // console.log('COMPOSABLE BASE API', baseAPIURL)

  return {
    baseAPIURL
  }
}