const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({ log: ["query", "warn", "error"] })

async function main() {
  console.log(
    `This call to create will cause an error because it will try to insert 
    and return the PK, whose name contains a space and is not escaped.
    Unfortunately, prisma generates
    INSERT INTO \`main\`.\`Customer\` DEFAULT VALUES RETURNING user id
    `)
  const customer = await prisma.customer.create({ data: {} })
  console.log("It would be great if you made it to here!")
  console.log(customer)
}

(async () => {
  await main()
})()