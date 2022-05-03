using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShindiggerWebAppConfigurationUI.ClientApp.Models
{
    public class LocaleContext : DbContext
    {
    public LocaleContext(DbContextOptions<LocaleContext> options) : base(options)
    { }

    public DbSet<Locale> Locale { get; set; }
  }
}
