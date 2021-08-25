import { AssignedCard } from 'src/assigned-cards/entities/assigned-card.entity';
import { CardBlueprint } from 'src/card-blueprints/entities/card-blueprint.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('card-stacks')
@Unique(['title'])
export class CardStack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  numberOfCards: number;

  @Column()
  cardBlueprintId: number;

  @ManyToOne(() => CardBlueprint, (cardBlueprint) => cardBlueprint.cardStacks)
  cardBlueprint: CardBlueprint;

  @OneToMany(() => AssignedCard, (assignedCards) => assignedCards.cardStack)
  assignedCards: AssignedCard[];
}
