﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using OpenCase.EFcore;
using System;

namespace OpenCase.Migrations
{
    [DbContext(typeof(OpenCaseContext))]
    [Migration("20180216161123_casesRename")]
    partial class casesRename
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("OpenCase.Entities.Case", b =>
                {
                    b.Property<int>("caseId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("caseTypeId");

                    b.Property<DateTime>("closeDate");

                    b.Property<DateTime>("createDate");

                    b.Property<DateTime>("logDate");

                    b.Property<string>("note");

                    b.Property<string>("title");

                    b.HasKey("caseId");

                    b.ToTable("Case");
                });

            modelBuilder.Entity("OpenCase.Entities.EntityCase", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("email");

                    b.Property<string>("name");

                    b.Property<string>("surname");

                    b.HasKey("Id");

                    b.ToTable("EntityCase");
                });
#pragma warning restore 612, 618
        }
    }
}
