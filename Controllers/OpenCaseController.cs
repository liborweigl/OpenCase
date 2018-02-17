using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OpenCase.Entities;
using OpenCase.ViewModel;
using MediatR;
using OpenCase.Event;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OpenCase.Controllers
{
    [Route("api/[controller]")]
    public class OpenCaseController : Controller
    {
        IMediator _mediator;
        public OpenCaseController(IMediator mediator)
        {
            _mediator = mediator;

        }

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
        public NoContentResult CreateNewEntity([FromBody]EntityViewModel test)
        {
            EntityCase e = new EntityCase();

            _mediator.Send(new CreateEntity() { email = test.email, name = test.name, surname = test.surname });

            return NoContent();


        }

        [HttpGet("GetEntities")]
        public IEnumerable<IEntity> GetEntities()
        {
            var model  =  _mediator.Send(new IndexEntity()).Result;

            return model;
        }

        [HttpGet("GetEntity")]
        public IEntity GetEntity(int Id)
        {
            return _mediator.Send(new IndexEntity() { ID = Id }).Result.FirstOrDefault();
        }


        /// <summary>
        /// Just prototype base on input date set close date
        /// </summary>
        /// <param name="startDate"></param>
        /// <returns></returns>
        [HttpGet("GetCloseDate")]
        public DateTime GetCloseDate(int typeID, DateTime startDate)
        {
            //todo base on types and rules
            return startDate.AddDays(10);
        }



        // POST api/values
        [HttpPost("CreateCase")]
        public IActionResult CreateCase([FromBody]Case value)
        {
            var caseId = _mediator.Send(new CreateCase() { Case = value }).Result;
            return Ok( new  { caseId = caseId });
        }

        [HttpGet("GetCases")]
        public IActionResult GetCases()
        {

            return Ok( _mediator.Send(new GetCase()).Result);
        }
    }
}
