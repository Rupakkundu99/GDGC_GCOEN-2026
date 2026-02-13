import { baseURL } from "../../baseurl"

export default function sitemap() {
    return [
      {
        url: baseURL,
        
      },
      {
        url: baseURL+'/Blogs',
       
      },
      {
        url: baseURL+'/Events',
        
      },
      {
        url: baseURL+'/Teams',
     
      },
      {
        url: baseURL+'/ContactUS',
        
      },
    ]
  }

