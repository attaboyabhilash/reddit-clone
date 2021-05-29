import { MikroORM } from "@mikro-orm/core"
import config from "./mikro-orm.config"
import 'reflect-metadata'
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { PostResolvers } from "./resolvers/post"
import { UserResolvers } from "./resolvers/user"
import redis from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { __prod__ } from "./constants"
import { MyContext } from "./types"


const main = async () => {
    const orm = await MikroORM.init(config)
    await orm.getMigrator().up()
    
    const app = express()

    const RedisStore = connectRedis(session)
    const redisClient = redis.createClient()

    app.use(
        session({
            name: 'qid',
            store: new RedisStore({ 
                client: redisClient,
                disableTouch: true 
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
                httpOnly: true,
                sameSite: 'lax',
                secure: __prod__
            },
            saveUninitialized: false,
            secret: 'qwewedfvfgnghmytdfvsddfaf',
            resave: false,
        })
    )

    const apolloServer = new ApolloServer({ 
        schema: await buildSchema({
            resolvers: [PostResolvers, UserResolvers],
            validate: false
        }),
        context: ({req, res}): MyContext => ({ em: orm.em, req, res })
    });

    apolloServer.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log("server started on localhost:4000")
    })
}

main().catch(err => console.error(err))


