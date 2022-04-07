import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const Config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
export default Config;
