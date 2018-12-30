using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YSchool.Management.Interfaces;

namespace YSchool.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class SchoolController : ControllerBase
    {
        private readonly ISchool _school;

        public SchoolController([FromServices] ISchool school) 
        {
            this._school = school;
        }
        // GET api/values
        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._school);
        }

  


    }
}
