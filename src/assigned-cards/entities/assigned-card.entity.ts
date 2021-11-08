import { AssignedCardPunch } from 'src/assigned-card-punches/entities/assigned-card-punch.entity';
import { AssignedCardRedeemedMark } from 'src/assigned-card-redeemed-marks/entities/assigned-card-redeemed-mark.entity';
import { CardStack } from 'src/card-stacks/entities/card-stack.entity';
import { Reward } from 'src/rewards/entities/reward.entity';
import {
  AfterLoad,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AssignedCard {
  @PrimaryGeneratedColumn()
  id: number;
  title: string;
  numberOfPunchBoxes: number;

  @Column()
  userId: string;

  @Column()
  cardStackId: number;

  @ManyToOne(() => CardStack, (cardStack) => cardStack.assignedCards, {
    eager: true,
  })
  cardStack: CardStack;

  rewards: Reward[];

  @OneToMany(
    () => AssignedCardRedeemedMark,
    (redeemedMarks) => redeemedMarks.assignedCard,
    { eager: true },
  )
  redeemedMarks: AssignedCardRedeemedMark[];

  @OneToMany(() => AssignedCardPunch, (punches) => punches.assignedCard, {
    eager: true,
  })
  punches: AssignedCardPunch[];

  @AfterLoad()
  load() {
    this.title = this.cardStack?.cardBlueprint?.title;
    this.numberOfPunchBoxes = this.cardStack?.cardBlueprint?.numberOfPunchBoxes;
    this.rewards = this.cardStack?.cardBlueprint?.cardBlueprintToRewards.map(
      (blueprintToReward) => blueprintToReward.reward,
    );
  }
}
