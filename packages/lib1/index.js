import {getText} from '@my-workspace/lib2'

const getEnrichedText = () => {
  return `${getText()} called from lib1`
}

const enrichedText = getEnrichedText()

console.log(enrichedText)