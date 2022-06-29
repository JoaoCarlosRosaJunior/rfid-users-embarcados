import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1653334262866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'id_tag',
            type: 'string',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'permission',
            type: 'varchar',
          },
          {
            name: 'github_link',
            type: 'varchar',
          },
          {
            name: 'active',
            type: 'bool',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
