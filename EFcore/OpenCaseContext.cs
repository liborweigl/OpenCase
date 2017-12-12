using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using OpenCase.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenCase.EFcore
{
    public class OpenCaseContext: DbContext
    {
        public OpenCaseContext(DbContextOptions<OpenCaseContext> options)
           : base(options)
        {
            Database.Migrate();
        }

        public DbSet<EntityCase> EntityCase { get; set; }
        
    }
}
