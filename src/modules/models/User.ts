import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  id_tag: string;

  @Column()
  name: string;

  @Column()
  permission: string;

  @Column()
  github_link: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };

/**
 * id - number
 * id_tag - number
 * name - string
 * permission - string
 * github_link - sring
 * created-at - Date
 */
