using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OpenCase.Migrations
{
    public partial class ChangeName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Entity",
                table: "Entity");

            migrationBuilder.RenameTable(
                name: "Entity",
                newName: "EntityCase");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EntityCase",
                table: "EntityCase",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_EntityCase",
                table: "EntityCase");

            migrationBuilder.RenameTable(
                name: "EntityCase",
                newName: "Entity");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Entity",
                table: "Entity",
                column: "Id");
        }
    }
}
