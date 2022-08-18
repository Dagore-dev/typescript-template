import sayHello from './sayHello'

function main (args: string[]): void {
  const name: string = args[2] ?? 'world'
  sayHello(name)
}

main(process.argv)
