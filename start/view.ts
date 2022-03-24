/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import { normalize } from 'path'
import View from '@ioc:Adonis/Core/View'

View.global('icon', (filePath: string) => {
  return normalize(View.GLOBALS.asset(`assets/icons/${filePath}`))
})

View.global('image', (filePath: string) => {
  return normalize(View.GLOBALS.asset(`assets/images/${filePath}`))
})

View.global('filePathToUrl', (filePath: string) => {
  const [, contentPath] = filePath.split('content/')
  return `https://github.com/japa/japa.dev/tree/develop/content/${contentPath}`
})
