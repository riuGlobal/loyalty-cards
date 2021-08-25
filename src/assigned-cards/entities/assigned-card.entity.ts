import { AssignedCardPunch } from 'src/assigned-card-punches/entities/assigned-card-punch.entity';
import { AssignedCardRedeemedMark } from 'src/assigned-card-redeemed-marks/entities/assigned-card-redeemed-mark.entity';
import { CardStack } from 'src/card-stacks/entities/card-stack.entity';
import { Reward } from 'src/rewards/entities/reward.entity';
import {
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

  @Column()
  userId: string;

  @Column()
  cardStackId: number;

  @ManyToOne(() => CardStack, (cardStack) => cardStack.assignedCards)
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
}
