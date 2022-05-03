using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShindiggerWebAppConfigurationUI.ClientApp.Models
{
    public class PaymentProcessorContext : DbContext
    {
    public PaymentProcessorContext(DbContextOptions<PaymentProcessorContext> options) : base(options)
    { }

    public DbSet<PaymentProcessor> PaymentProcessor { get; set; }
  }
}
