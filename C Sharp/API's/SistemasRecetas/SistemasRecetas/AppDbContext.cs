using Microsoft.EntityFrameworkCore;
using SistemasRecetas.Models;

namespace SistemasRecetas;

public class AppDbContext : DbContext
{
    public DbSet<Recipe> Recipes { get; set; }
    
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}