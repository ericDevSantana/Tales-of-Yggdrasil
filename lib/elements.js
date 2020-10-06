import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'elements')

export function getAllElementsIds() {
    const fileNames = fs.readdirSync(postsDirectory)

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
export function getText(elem) {
    const fullPath = path.join(postsDirectory, `${elem}.txt`)
    const description = fs.readFileSync(fullPath, 'utf8')

    return {
        elem,
        description
    }
}