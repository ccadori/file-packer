const fs = require('fs')

class FilePacker {
    constructor(args) {
        // Removing constant args
        this.files = args
        this.files.splice(0, 2)

        // We need two or more arguments
        if (this.files.length < 2)
            throw new Error("INVALID_ARGUMENTS")

        // Path to the new file
        this.newFile = this.files.splice(process.argv.length - 1, 1)[0]
        console.log(this.newFile)
    }

    pack() {
        // Getting the content of the files
        let text = FilePacker.readFiles(this.files)
        
        //Writing into the new file
        fs.writeFileSync(this.newFile, text, 'utf8')
    }

    static readFiles(files) {
        let text = ""

        for (let file of files) {
            text += fs.readFileSync(file)
        }

        return text
    }
}

module.exports = FilePacker