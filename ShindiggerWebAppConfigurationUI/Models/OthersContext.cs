using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShindiggerWebAppConfigurationUI.ClientApp.Models
{
    public class OthersContext : DbContext
    {
    public OthersContext(DbContextOptions<OthersContext> options) : base(options)
    { }

    public DbSet<Others> Others { get; set; }
  }
}
}
