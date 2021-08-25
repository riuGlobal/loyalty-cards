import { CardBlueprint } from 'src/card-blueprints/entities/card-blueprint.entity';
import { Reward } from 'src/rewards/entities/reward.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('cardBlueprintToRewards')
@Unique(['rewardId', 'cardBlueprintId'])
export class CardBlueprintToReward {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rewardId: number;

  @Column()
  cardBlueprintId: number;

  @ManyToOne(() => Reward, (reward) => reward.cardBlueprintToRewards, {
    eager: true,
  })
  reward: Reward;

  @ManyToOne(
    () => CardBlueprint,
    (cardBlueprint) => cardBlueprint.cardBlueprintToRewards,
    { eager: true },
  )
  cardBlueprint: CardBlueprint;
}
