export function getSocialMetas({
  url,
  title = 'Kim Sheng Yong',
  description = 'Make the world better with technology',
  origin,
  image= "https://www.sykim.me/img/kim-profile.png",
  keywords = "Kim Sheng Yong, XMUM, Xiamen University Malaysia, XMUM, XMUM Tech Club, Student Developer, Kim, Sheng Yong",
}: {
  origin?: string
  image?: string
  url?: string
  title?: string
  description?: string
  keywords?: string
}) {
  return {
    title,
    description,
    keywords,
    image,
    'og:url': url,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'twitter:card': image,
    'twitter:creator': '@kimsyyy99',
    'twitter:site': '@kimsyyy99',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:alt': title,
  }
}
