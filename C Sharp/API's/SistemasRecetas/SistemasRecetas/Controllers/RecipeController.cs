using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using SistemasRecetas.Models;

namespace SistemasRecetas.Controllers;

public class RecipeController : Controller
{
    private readonly AppDbContext _context;

    public RecipeController(AppDbContext context)
    {
        _context = context; //DB
    }

    [HttpGet]
    public IActionResult Index() //Muestra la lista
    {
        return View(new List<Recipe>());
    }

    [HttpPost]
    public async Task<IActionResult> Index(string name)
    {
        var result = await GetRecipesAsync(name);
        return View(result?.Meals ?? new List<Recipe>());
    }

    public static async Task<RecipeResponse?> GetRecipesAsync(string name)
    {
        string api = $"https://www.themealdb.com/api/json/v1/1/search.php?s={name}";
        using HttpClient client = new HttpClient();
        string response = await client.GetStringAsync(api);
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        return JsonSerializer.Deserialize<RecipeResponse>(response, options);
    }
}