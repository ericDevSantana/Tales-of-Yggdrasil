import fs from 'fs'
import path from 'path'

const elementsDirectory = path.join(process.cwd(), 'elements')

export function getAllElements() {
    const fileNames = fs.readdirSync(elementsDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       elem: 'Agua'
    //     }
    //   },
    //   {
    //     params: {
    //       elem: 'Fogo'
    //     }
    //   }
    // ]

    return fileNames.map(fileName => {
        return {
            params: {
                elem: fileName.replace(/\.txt$/, '')
            }
        }
    })
}

// return element name and description from txt file
export function getElement(elem) {
    const fullPath = path.join(elementsDirectory, `${elem}.txt`)
    const description = fs.readFileSync(fullPath, 'utf8')

    return {
        elem,
        description
    }
}