import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'elements')

export function getAllElementsIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
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

export function getText(elem) {
    const fullPath = path.join(postsDirectory, `${elem}.txt`)
    const description = fs.readFileSync(fullPath, 'utf8')

    return {
        elem,
        description
    }
}