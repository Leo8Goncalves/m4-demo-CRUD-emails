import 'dotenv/config'
import path from 'path'
import { DataSource, DataSourceOptions } from 'typeorm'

export const datasourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{js,ts}')
  const migrationsPath: string = path.join(__dirname, './migrations/**.{js,ts}')
  const dbUrl: string | undefined = process.env.DATABASE_URL

  if(!dbUrl) throw new Error('missing env var: "DATABASE_URL"')

  return {
    type: 'postgres',
    url: dbUrl,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath]
  }
} 

export const AppDataSource: DataSource = new DataSource(datasourceConfig())