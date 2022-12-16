import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { UserPostModule } from './user-post/user-post.module';
import { PostCommentModule } from './post-comment/post-comment.module';
import { PostLikeModule } from './post-like/post-like.module';
import { FriendshipModule } from './friendship/friendship.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

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
      url: process.env.DATABASE_URL
      
    }),
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../env'
    }),
    UserPostModule,
    PostCommentModule,
    PostLikeModule,
    FriendshipModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
