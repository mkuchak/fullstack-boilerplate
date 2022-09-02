import { CodegenConfig } from '@graphql-codegen/cli'

const env = {
  endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:8080/v1/graphql',
  adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET || 'myreallylongandsecureadminsecretkey',
}

const config: CodegenConfig = {
  schema: [
    {
      [env.endpoint]: {
        headers: {
          'x-hasura-admin-secret': env.adminSecret,
        },
      },
    },
  ],
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        fetcher: 'graphql-request',
      },
    },
  },
}

export default config
