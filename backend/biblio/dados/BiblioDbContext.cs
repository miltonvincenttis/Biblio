using biblio.modelos;
using Microsoft.EntityFrameworkCore;

namespace biblio.dados
{
    public class BiblioDbContext : DbContext
    {
        public BiblioDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Literatura> Literaturas { get; set; }


    }
}
