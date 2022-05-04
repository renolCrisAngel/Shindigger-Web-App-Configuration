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
    public class OthersController : ControllerBase
    {

        //private readonly OthersContext _context;

        //public OthersController(OthersContext context)
        //{
        //    _context = context;
        //}

        // GET: api/<OthersController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<OthersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<OthersController>
        [HttpPost]
        public void Post([FromBody] Others data)
        {
            
        }

        // PUT api/<OthersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<OthersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpPost, Route("cardfee")]
        public int SetCardFee([FromBody] CardFee data)
        {
            return 1;
        }



        [HttpPost, Route("taxmethod")]
        public int SetTaxMethod([FromBody] TaxMethod data)
        {
            return 1;
        }


    }
}
