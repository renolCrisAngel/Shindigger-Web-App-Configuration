using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShindiggerWebAppConfigurationUI.ClientApp.Models
{
    public class DataCenterContext : DbContext
    {
    public DataCenterContext(DbContextOptions<DataCenterContext> options) : base(options)
    { }

    public DbSet<DataCenter> DataCenter { get; set; }
  }

}
