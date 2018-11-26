#!/usr/bin/env node

const cac = require("cac")
const cli = cac()

const request = require("request")
const fs = require("fs")


cli.command("<file>")
  .action(file => {
    const filePath = `${process.cwd()}/${file}`
    console.log(`Uploading ${file} ...`)
    request.post({
      url: "https://express-upload-demo-dbnnyafbub.now.sh/upload",
      formData: {
        file: fs.createReadStream(filePath)
      }
    }, (err, httpResponse, body) => {
      console.log(err || body)
    })
  })

cli.parse()