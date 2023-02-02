const translate = require('translator')

export const trans = translate.translate('hello' ,{to: 'fr'}, (err , res) =>{
    console.log(res)
})
