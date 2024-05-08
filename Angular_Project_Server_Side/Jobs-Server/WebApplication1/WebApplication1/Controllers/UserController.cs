using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Interfaces;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet("GetUser/{name}/{password}")]
        public ActionResult Get(string name, string password)
        {
            return Ok(userService.GetUser(name,password));
        }

    }
}
