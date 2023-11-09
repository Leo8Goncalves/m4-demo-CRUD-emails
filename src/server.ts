import 'dotenv/config'  
import { AppDataSource } from "./data-source";
import { app } from './app';

AppDataSource.initialize()
  .then((): void => {
    console.log('Database Connected')

    const PORT: number = Number(process.env.PORT) || 3000
    app.listen(PORT, (): void => console.log(`App is running at port ${PORT}`))
  })
  .catch((err): void => console.log(err))