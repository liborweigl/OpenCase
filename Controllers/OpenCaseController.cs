using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OpenCase.Entities;
using OpenCase.ViewModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OpenCase.Controllers
{
    [Route("api/[controller]")]
    public class OpenCaseController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost("TestPost")]
        public void TestPost([FromBody]string value)
        {
            
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        // POST api/values
        [HttpPost("CreateNewEntity")]
        public void CreateNewEntity([FromBody]EntityViewModel test)
        {
            Entity e = new Entity();
           

            Console.WriteLine("test"+ test);

           
        }

        [HttpGet("GetEntities")]
        public IEnumerable<IEntity> GetEntities()
        {

            IList<IEntity> list = new List<IEntity>();
            list.Add(new Entity() { name = "xxx", surname = "dd", email = "dd@gmailc.om" });
            list.Add(new Entity() { name = "xxxdd", surname = "eee", email = "dd@gmailc222.om" });
            return list;
        }
    }
}
