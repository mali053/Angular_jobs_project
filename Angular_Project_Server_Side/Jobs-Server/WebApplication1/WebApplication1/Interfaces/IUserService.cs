using System.Collections.Generic;
using WebApplication1.Models;
namespace WebApplication1.Interfaces
{
    public interface IUserService
    {
        User GetUser(string userName, string password);

    }
}
