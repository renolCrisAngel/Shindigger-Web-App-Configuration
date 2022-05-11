using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShindiggerWebAppConfigurationUI
{
    public class LocaleX
    {
        public int CorpId { get; set; }

        public int LocaleId { get; set; }

        public string locale { get; set; }
    }

    public class Locale
    {
        public int LCIDDecimal { get; set; }

        public string Name { get; set; }
         
        public int CorpID { get; set; }
    }
}
