import axios from "axios"

interface Banner {
  id: number
  name: string
  description: string
  productId: number
  image: string
}

interface BannerResponse {
  banners: Banner[]
}

export const gethero = async (): Promise<BannerResponse> => {
  try {
    const response = await axios.get('https://ashyo.store/api/banner', {
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return { banners: [] }
  }
}