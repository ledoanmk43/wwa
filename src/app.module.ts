import { dbConfig } from '@infra/database/database.config'
import { DynamicConfigModule } from '@infra/config/config.module'
import { defaultConfig } from '@infra/config/default.config'
import { DynamicDatabaseModule } from '@infra/database/database.module'
import { Module } from '@nestjs/common'
import { DynamicLoggerModule } from '@infra/logger/logger.module'
import { DynamicContextModule } from '@infra/context/context.module'
import { UserModule } from '@core/user/user.module'
import { DynamicCacheModule } from '@infra/cache/cache.module'
import { cacheConfig } from '@infra/cache/cache.config'
import { AuthModule } from '@core/auth/auth.module'
import { DynamicCronJobModule } from '@infra/cronjob/cron.module'
import { DynamicMailerModule } from '@infra/mailer/mailer.module'
import { mailerConfig } from '@infra/mailer/mailer.config'

@Module({
  imports: [
    DynamicConfigModule.registerAsync({
      isGlobal: true,
      load: [defaultConfig, dbConfig, cacheConfig, mailerConfig]
    }),
    DynamicContextModule.registerAsync({ isGlobal: true }),
    DynamicLoggerModule.registerAsync(),
    DynamicCacheModule.registerAsync({ isGlobal: true }),
    DynamicDatabaseModule.registerAsync(),
    DynamicCronJobModule.registerAsync(),
    DynamicMailerModule.registerAsync({ isGlobal: true }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
