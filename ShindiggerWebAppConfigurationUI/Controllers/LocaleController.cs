using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShindiggerWebAppConfigurationUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocaleController : ControllerBase
    {

        //private readonly LocaleContext _context;

        //public LocaleController(LocaleContext context)
        //{
        //    _context = context;
        //}



        // GET: api/<LocaleController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<LocaleController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LocaleController>
        [HttpPost]
        public string Post([FromBody] Locale data)
        {
            return "successvalue";
        }

        // PUT api/<LocaleController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LocaleController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet, Route("getlocales")]
        public IEnumerable<string> GetLocales()
        {
            return new string[] { "Sample Locale 1", "Sample Locale 2" };
        }

    }
}
