using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OpenCase.Migrations
{
    public partial class @case : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cases",
                columns: table => new
                {
                    caseId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    caseTypeId = table.Column<int>(nullable: false),
                    closeDate = table.Column<DateTime>(nullable: false),
                    createDate = table.Column<DateTime>(nullable: false),
                    logDate = table.Column<DateTime>(nullable: false),
                    note = table.Column<string>(nullable: true),
                    title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cases", x => x.caseId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cases");
        }
    }
}
