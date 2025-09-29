using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using System.Text.Json;

namespace WebApplication1.Controllers;


[ApiController]
[Route("[controller]")]
public class QcmController : ControllerBase
{
    [HttpGet("{count}")]
    public IActionResult Get(int count)
    {
        var jsonPath = "Data/Anatomie.json";
        if (!System.IO.File.Exists(jsonPath))
            return NotFound("Fichier JSON non trouvé.");

        var json = System.IO.File.ReadAllText(jsonPath);
        var questions = JsonSerializer.Deserialize<List<Qcm>>(json);

        if (questions == null || questions.Count == 0)
            return NotFound("Aucune question disponible.");

        var random = new Random();
        var selected = questions.OrderBy(x => random.Next()).Take(count).ToList();

        return Ok(selected);
    }
}
