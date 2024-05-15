import pg from 'pg-connection-string'
const parse = pg.parse
const config = process.env.DATABASE_URL ? parse(process.env.DATABASE_URL) : undefined

const dbConfig = {
  dev: {
    connection: {
      client: 'postgres',
      connection: {
        host: config?.host ?? '127.0.0.1',
        port: config?.port ?? 5432,
        database: config?.database ?? '',
        user: config?.user ?? '',
        password: config?.password ?? '',
        /*ssl: {
          rejectUnauthorized: false,
        },*/
      },
      debug: false,
    },
  },
}


export default ({ env }: any) => {
  return dbConfig['dev']
}
