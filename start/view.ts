/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import View from '@ioc:Adonis/Core/View'

View.global('icon', (filePath: string) => {
  return View.GLOBALS.asset(`assets/icons/${filePath}`)
})

View.global('image', (filePath: string) => {
  return View.GLOBALS.asset(`assets/images/${filePath}`)
})
