using Microsoft.EntityFrameworkCore;

namespace ShopWeb.Data;

public class AppDbContext : DbContext // Esta clase representa la conexión y comunicación con la base de datos
{
    // Constructor del contexto
    // Recibe las opciones de configuración (la cadena de conexión)
    // y se las pasa al constructor de la clase base (DbContext)
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
}