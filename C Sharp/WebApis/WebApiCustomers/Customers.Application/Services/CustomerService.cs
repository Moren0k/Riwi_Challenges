using Customers.Domain.Models;

namespace Customers.Application.Services;

public class CustomersServices
{
    private readonly List<Customers> _customers = new(); //Lista de Customers
    private int _nextId = 1; //Incrementar el ID de los Customers

    /*Crud Infrastructure (NO LOGICA DE NEGOCIO)*/

    //Listar GET
    public IEnumerable<Customer> GetCustomers()
    {
        return _customers;
    }

    //Crear ADD
    public Customers AddCustomer(Customers customer)
    {
        
    }
}