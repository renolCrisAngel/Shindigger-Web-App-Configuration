using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShindiggerWebAppConfigurationUI
{
    public class Others
    {
       public int LocationId { get; set; }

       public string Enable { get; set; }

       public string Disable { get; set; }
       
       public string Taxon { get; set; }

       public string Taxin { get; set; }

       public string others { get; set; }
 
    }

    public class CardFee
    {
        public int LocationId { get; set; }

        public bool Enable { get; set; }
    }

    public class TaxMethod
    {
        public int LocationId { get; set; }

        public int Taxon { get; set; }
    }
}

