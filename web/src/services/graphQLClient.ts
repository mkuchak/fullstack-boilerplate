import { GraphQLClient } from 'graphql-request'

const env = {
  endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:8080/v1/graphql',
  adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET || 'myreallylongandsecureadminsecretkey',
}

const headers = {
  // 'x-hasura-admin-secret': env.adminSecret,
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjkwYTQyYTZiLTNmZjAtNDg3Yi1iYTYzLTRkMmZmNTIzMGU0YyJ9LCJpYXQiOjE2MzYzOTkyNjIsImV4cCI6Mjk2NzkzNTI2Mn0.j7nvySEqdYv0xph7HfaFU1vlS6SxEnzfRalCJlGlHms',
}

export const graphQLClient = new GraphQLClient(env.endpoint, { headers })
