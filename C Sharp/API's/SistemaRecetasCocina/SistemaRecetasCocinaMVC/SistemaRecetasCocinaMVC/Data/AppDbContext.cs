using Microsoft.EntityFrameworkCore;
using SistemaRecetasCocinaMVC.Models;

namespace SistemaRecetasCocinaMVC.Data;

public class AppDbContext : DbContext
{
    public DbSet<Recipe> Recipes { get; set; }
    
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}