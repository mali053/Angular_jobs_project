using System.Collections.Generic;
using System.Xml.Linq;
using WebApplication1.Interfaces;
using WebApplication1.Models;
namespace WebApplication1.Servises
{
    public class JobService : IJobService
    {
        List<Job> jobs= new List<Job>()
        {
            new Job {JobField= JobFields.Secretariat, Name="Chief Secretary", ScopeOfHours=40, Area="Modiin Elit", Requirements="Diligence, and work ethic",WorkingFromHome= false },
            new Job {JobField= JobFields.Architecture, Name="Expert architect", ScopeOfHours=50, Area="Jerusalem", Requirements="Extensive knowledge of construction theory",WorkingFromHome= true },
            new Job {JobField= JobFields.ComputerProgramming, Name="Software Engineer", ScopeOfHours=40, Area="TelAviv", Requirements="Advanced programming skills and a bachelor's and master's degree are a must!! PhD preferred",WorkingFromHome= true }
        };
        public List<Job> GetAllJobs()
        {
            return jobs;
        }
    }
}
