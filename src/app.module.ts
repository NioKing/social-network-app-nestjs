import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserPostModule } from './user-post/user-post.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: ["dist/**/entities/*.entity{.ts,.js}"],
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        requestCert: true,
        rejectUnauthorized: false
      },
      url: 'postgres://movie_db_user:4cbcwsNdoW45ZwT4LZc2zXFzRLEgfmJI@dpg-ccbjd69a6gdmn7sguk30-a.frankfurt-postgres.render.com/movie_db'
    }),
    UserModule,
    UserPostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
