using System.ComponentModel.DataAnnotations;

namespace SistemasRecetas.Models;

public class Recipe
{
    [Key] private int Id { get; set; } // ID
    [MaxLength(255)] public string? strMeal { get; set; }
    [MaxLength(255)] public string? strInstructions { get; set; }
    [MaxLength(255)] public string? strMealThumb { get; set; }
}