import fs from 'fs'
import path from 'path'

const racesDirectory = path.join(process.cwd(), 'races')

export function getAllRaces() {
    const fileNames = fs.readdirSync(racesDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       race: 'Phantons'
    //     }
    //   },
    //   {
    //     params: {
    //       race: 'Aasgardianos'
    //     }
    //   }
    // ]

    return fileNames.map(fileName => {
        return {
            params: {
                race: fileName.replace(/\.txt$/, '')
            }
        }
    })
}

// return element name and description from txt file
export function getRace(race) {
    const fullPath = path.join(racesDirectory, `${race}.txt`)
    const description = fs.readFileSync(fullPath, 'utf8')

    return {
        race,
        description
    }
}