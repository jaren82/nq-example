import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField, IDField } from '@nestjs-query/query-graphql';

@ObjectType('TodoItem')
@Entity()
export class TodoItemEntity {
  @IDField(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @FilterableField()
  @Column()
  title!: string;

  @FilterableField()
  @Column()
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn()
  created!: Date;

  @Field(() => GraphQLISODateTime)
  @UpdateDateColumn()
  updated!: Date;
}
