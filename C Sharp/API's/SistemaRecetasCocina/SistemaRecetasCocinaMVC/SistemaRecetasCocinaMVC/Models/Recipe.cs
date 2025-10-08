using System.ComponentModel.DataAnnotations;

namespace SistemaRecetasCocinaMVC.Models;

public class Recipe
{
    public int Id { get; set; } // Id de la DB
    [MaxLength(255)]
    public string? IdMeal { get; set; } // Id de la API
    [MaxLength(255)]
    public string? StrMeal { get; set; }
    [MaxLength(255)]
    public string? StrInstructions { get; set; }
    [MaxLength(255)]
    public string? StrMealThumb { get; set; }

    // Ingredientes (Puede haber 20)
    public string? StrIngredient1 { get; set; }
    public string? StrIngredient2 { get; set; }
    public string? StrIngredient3 { get; set; }
    public string? StrIngredient4 { get; set; }
    public string? StrIngredient5 { get; set; }
    public string? StrIngredient6 { get; set; }
    public string? StrIngredient7 { get; set; }
    public string? StrIngredient8 { get; set; }
    public string? StrIngredient9 { get; set; }
    public string? StrIngredient10 { get; set; }
    public string? StrIngredient11 { get; set; }
    public string? StrIngredient12 { get; set; }
    public string? StrIngredient13 { get; set; }
    public string? StrIngredient14 { get; set; }
    public string? StrIngredient15 { get; set; }
    public string? StrIngredient16 { get; set; }
    public string? StrIngredient17 { get; set; }
    public string? StrIngredient18 { get; set; }
    public string? StrIngredient19 { get; set; }
    public string? StrIngredient20 { get; set; }
    
    public List<string> GetIngredients() // Método para obtener solo los ingredientes no vacíos
    {
        var ingredients = new List<string?>
        {
            StrIngredient1, StrIngredient2, StrIngredient3, StrIngredient4, StrIngredient5,
            StrIngredient6, StrIngredient7, StrIngredient8, StrIngredient9, StrIngredient10,
            StrIngredient11, StrIngredient12, StrIngredient13, StrIngredient14, StrIngredient15,
            StrIngredient16, StrIngredient17, StrIngredient18, StrIngredient19, StrIngredient20
        };

        return ingredients
            .Where(i => !string.IsNullOrWhiteSpace(i))
            .ToList()!;
    }
}