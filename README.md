# typeorm_express
## Example project showcasing automatic database migrations with TypeORM in an Express app.

### Run the server app
#### The auto migrations running (migrationsRun: true)
```bash
yarn start
```

### All custom commands in package.json
```bash
yarn typeorm
yarn migration:run
yarn migration:revert
yarn migration:show
```

### Create empty migration files
```bash
yarn typeorm migration:create -- src/migration/user
```

### Generate migration files for existing entities.
```bash
yarn typeorm migration:generate -- src/migration/user -d src/data-source.ts
```
