import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1674387414037 implements MigrationInterface {
    name = 'migration1674387414037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "todo" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "text" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "todo"
        `);
    }

}
