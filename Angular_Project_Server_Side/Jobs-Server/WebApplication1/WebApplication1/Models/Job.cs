namespace WebApplication1.Models
{

    public class Job
    {
        public JobFields JobField { get; set; }
        public string Name { get; set; }
        public int ScopeOfHours { get; set; }
        public string Area { get; set; }
        public string Requirements { get; set; }
        public bool WorkingFromHome { get; set; }
    }

}
