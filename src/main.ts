import sayHello from './sayHello'

function main (args: String[]): void {
  console.log(args)
  sayHello('Xavi')
}

main(process.argv)
