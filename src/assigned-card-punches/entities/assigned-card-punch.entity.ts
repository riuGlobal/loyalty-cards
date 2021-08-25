import { AssignedCard } from 'src/assigned-cards/entities/assigned-card.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('assigned-card-punches')
export class AssignedCardPunch {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  datePunched: Date;

  @Column()
  assignedCardId: number;

  @ManyToOne(() => AssignedCard, (assignedCard) => assignedCard.punches)
  assignedCard: AssignedCard;
}
