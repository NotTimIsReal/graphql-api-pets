import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const Config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: ':memory:',
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  synchronize: true,
};
export default Config;
