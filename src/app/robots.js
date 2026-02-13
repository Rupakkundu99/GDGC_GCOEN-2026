import { baseURL } from "../../baseurl"

export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: ['/','/Events','/Teams','/ContactUS','/Blogs'],
        disallow: '',
      },
      sitemap: baseURL+'/sitemap.xml',
    }
}