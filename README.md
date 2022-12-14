# Full-stack Boilerplate

Full-stack boilerplate for TypeScript, Next.js, GraphQL, React Query, TailwindCSS, Prisma and Hasura.

## How to start

```bash
# Copy environment variables file
cp web/.env.example web/.env

# Start development containers (http://localhost:3000 and http://localhost:9695)
docker-compose up -d

# Stop all containers
docker-compose down

# Enter in container if needed
docker exec -it nextjs-web sh

# Restart and reset all containers, including database (wipe out all data)
docker-compose down --remove-orphans -v && docker-compose up -d --build -V
```

## How to easy update schema and manage Hasura Console

1. First, modify `web/prisma/schema.prisma` as you want.
2. After that, run `npm run prisma:create` to create the Prisma migration.
3. Then, open Hasura Console at [http://localhost:9695/console/data/sql](http://localhost:9695/console/data/sql) and paste the SQL generated by Prisma. Also, check "This is a migration" and fill the migration name.
4. Done! Your GraphQL API is ready to use through Hasura GraphQL Engine. If you need to manage the metadata, it will be automatically modified at `hasura/metadata` folder and you can commit it as if it were code.

## Other commands

```bash
# Start Prisma Studio to see the database (http://localhost:9090)
npm run prisma:studio

# Create a migration
npm run prisma:create

# Run the migration
npm run prisma:migrate

# Create a migration and run it
npm run prisma:migrate:dev

# Synchronize the schema with the database without creating a migration
npm run prisma:sync

# Synchronize the database with the schema (Prisma Introspection)
npm run prisma:sync:reverse

# Reset entire database
npm run prisma:reset

# Run Hasura migrations
npm run hasura:migrate

# Display current status of migrations on a database
npm run hasura:migrate:status

# Clear migrations from local project
npm run hasura:migrate:reset

# Apply all Hasura metadata on the database
npm run hasura:metadata

# Clear Hasura engine metadata on the database
npm run hasura:metadata:reset

# Apply all Hasura seeds on the database
npm run hasura:seed

# Create a seed file from a table
npm run hasura:seed:create --file=test --table=users
```