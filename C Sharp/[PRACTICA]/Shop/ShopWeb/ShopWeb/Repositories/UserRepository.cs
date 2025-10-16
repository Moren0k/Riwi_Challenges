using Microsoft.EntityFrameworkCore;
using ShopWeb.Data;
using ShopWeb.Models;
using ShopWeb.Repositories.Interfaces;

namespace ShopWeb.Repositories;

public class UserRepository : IUserRepository
{
    
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context) //Contexto de la base de datos
    {
        _context = context; //DB
    }
    
    public async Task<IEnumerable<User>> GetAllAsync() //Obtener todos
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<User?> GetByIdAsync(int id) //Obtener por ID
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task AddAsync(User user) //Agregar
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
    }

    public Task UpdateAsync(User user) //Actualizar
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(int id) //Eliminar
    {
        throw new NotImplementedException();
    }
}