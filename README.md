This repo demostrates a bug in prisma.io that
occurs when you try to insert into a table that has a space in the name
of the table's primary key.

```
git clone git@github.com:michaelaltmann/prisma_bug_space_pk.git
yarn install
npx prisma db push
node main.js
```
