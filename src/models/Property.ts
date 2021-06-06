import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './User';

@Entity('properties')
class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  zip_code: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  rent: number;

  @Column()
  rooms: number;

  @Column()
  avaliable: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Property;
