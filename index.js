import { createInterface } from 'node:readline';
import chalk from 'chalk'
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const capitalize = (string) => 
string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()


const emptyInput = (input) => {
  const name = input.trim()
  return name.length > 0  
}
const isValidName = (input) => {
  const name = input.trim()
  return /^[\p{L}\s'-]+$/u.test(name)
}

const askName = () => {
  rl.question(chalk.green("Hej, vad heter du? \n"), input => {
    if (!emptyInput(input)) {
      console.log(chalk.red("Tomt fält, vänligen fyll i ditt name."))
      return askName()
    }
    if (!isValidName(input)){
      console.log(chalk.red("Ogiltigt tecken, använd endast bokstäver."))
      return askName()
    }
    
    const normalized = capitalize(input)
    const reversed   = capitalize(input.split("").reverse().join(""))

    console.log(chalk.magenta(`Hej `) + (chalk.blue(`${normalized}!`)))
    console.log(chalk.magenta(`Ditt namn baklänges blir `) +(chalk.yellow(`${reversed}`)))
    rl.close()
  })
}

askName()
 


