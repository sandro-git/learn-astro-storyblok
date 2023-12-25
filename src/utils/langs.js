//You can have the languages in an utils file so it can be reused.
let languages = ['en', 'en-us']
function getTransLink(language, slug) {
  return language === 'en' ? slug : `/${language}${slug}`
}
export { getTransLink, languages }