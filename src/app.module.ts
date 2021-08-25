import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardStacksModule } from './card-stacks/card-stacks.module';
import { RewardsModule } from './rewards/rewards.module';
import { CardBlueprintsModule } from './card-blueprints/card-blueprints.module';
import { AssignedCardsModule } from './assigned-cards/assigned-cards.module';
import { AssignedCardPunchesModule } from './assigned-card-punches/assigned-card-punches.module';
import { AssignedCardRedeemedMarksModule } from './assigned-card-redeemed-marks/assigned-card-redeemed-marks.module';
import { CardBlueprintToRewardsModule } from './card-blueprint-to-rewards/card-blueprint-to-rewards.module';
import { HeatbeatModule } from './models/heatbeat/heatbeat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(),
    CardStacksModule,
    RewardsModule,
    CardBlueprintsModule,
    AssignedCardsModule,
    AssignedCardPunchesModule,
    AssignedCardRedeemedMarksModule,
    CardBlueprintToRewardsModule,
    HeatbeatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
