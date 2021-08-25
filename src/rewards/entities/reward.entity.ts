import { CardBlueprintToReward } from "src/card-blueprint-to-rewards/entities/card-blueprint-to-reward.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reward {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  amount: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @OneToMany(() => CardBlueprintToReward, cardBlueprintToRewards => cardBlueprintToRewards.reward)
  cardBlueprintToRewards: CardBlueprintToReward[]
}
