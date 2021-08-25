import { text } from 'express';
import { AssignedCard } from 'src/assigned-cards/entities/assigned-card.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('assigned-card-redeemed-marks')
export class AssignedCardRedeemedMark {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: Date;

  @Column()
  assignedCardId: number;

  @Column()
  note: string;

  @ManyToOne(() => AssignedCard, (assignedCard) => assignedCard.redeemedMarks)
  assignedCard: AssignedCard;
}
