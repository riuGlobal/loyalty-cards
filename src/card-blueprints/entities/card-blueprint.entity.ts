import { CardBlueprintToReward } from 'src/card-blueprint-to-rewards/entities/card-blueprint-to-reward.entity';
import { CardStack } from 'src/card-stacks/entities/card-stack.entity';
import { Reward } from 'src/rewards/entities/reward.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('card-blueprints')
export class CardBlueprint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  numberOfPunchBoxes: number;

  @OneToMany(
    () => CardBlueprintToReward,
    (cardBlueprintToRewards) => cardBlueprintToRewards.cardBlueprint,
  )
  cardBlueprintToRewards: CardBlueprintToReward[];

  rewards: Reward[];

  // @OneToMany(
  //   () => Reward,
  //   (rewardsTest) =>
  //     rewardsTest.cardBlueprintToRewards.map((bp) => bp.cardBlueprint),
  // )
  // rewardsTest: Reward[];

  @OneToMany(() => CardStack, (cardStacks) => cardStacks.cardBlueprint)
  cardStacks: CardStack[];
}
