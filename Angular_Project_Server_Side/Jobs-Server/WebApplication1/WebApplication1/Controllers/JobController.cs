using Microsoft.AspNetCore.Mvc;
using WebApplication1.Interfaces;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        IJobService jobService;
        public JobController(IJobService jobService)
        {
            this.jobService = jobService;
        }

        [HttpGet("GetAllJobs")]
        public IActionResult GetAllJobs()
        {
            return Ok(jobService.GetAllJobs());
        }
      
    }
}
