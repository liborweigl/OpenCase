using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OpenCase.Migrations
{
    public partial class casesRename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Cases",
                table: "Cases");

            migrationBuilder.RenameTable(
                name: "Cases",
                newName: "Case");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Case",
                table: "Case",
                column: "caseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Case",
                table: "Case");

            migrationBuilder.RenameTable(
                name: "Case",
                newName: "Cases");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cases",
                table: "Cases",
                column: "caseId");
        }
    }
}
