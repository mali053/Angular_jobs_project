
using System.Collections.Generic;
using WebApplication1.Models;

namespace WebApplication1.Interfaces
{
    public interface IJobService
    {
        List<Job> GetAllJobs();
    }
}
