namespace WebApplication1.Models;

public class Qcm
{
    public int Id { get; set; }
    public string Question { get; set; }
    public Dictionary<string, string> Choices { get; set; }
    public string Answer { get; set; } 
}