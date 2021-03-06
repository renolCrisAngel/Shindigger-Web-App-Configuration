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
    public class DataCenterController : ControllerBase
    {

        //private readonly DataCenterContext _context;

        //public DataCenterController(DataCenterContext context)
        //{
        //    _context = context;
        //}


        // GET: api/<DataCenterController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<DataCenterController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DataCenterController>
        [HttpPost]
        public void Post([FromBody] DataCenter data)
        {    
            //try
            //{
            //    if(data.Datacenter == "http://")
            //    {
            //        return 0;
            //    }
            //    else
            //    {
            //        return 1;
            //    }
              
            //}
            //catch (Exception ex)
            //{
            //    return 0;
            //}
        }

        // PUT api/<DataCenterController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DataCenterController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }


        //[HttpGet, Route("getlocales")]
        //public IEnumerable<string> GetLocales()
        //{
        //    return new string[] { "US", "PH" };
        //}
    }
}
