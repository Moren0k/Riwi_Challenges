namespace Program;
public class ValidacionesDeCompra
{
    public static Dictionary<string, (decimal precio, int stock)> productos = new() //DEFINIR INVENTARIO
    {
        { "papas", (2000, 10) },
        { "alfajor", (1000, 30) },
        { "chicle", (300, 40) },
        { "chetos", (3500, 5) }
    };
    
    public static decimal subTotal = 0;
    public static decimal total = 0;
    
    public static void ShowStock() // Muestra los productos
    {
        Console.WriteLine("@== BIENVENIDO A LA TIENDA DE ANA ==@");
        Console.WriteLine("|PRODUCTO|PRECIO|CANTIDAD|");
        foreach (var item in productos)
        {
            Console.WriteLine($"{item.Key}|{item.Value.precio}|{item.Value.stock}");
        }
    }

    public static void quiereComprar()
    {
        Console.WriteLine("¿Quieres comprar? si/no");
        string enter = Console.ReadLine().ToLower();
        if (enter == "si")
        {
            productoDeseado();
        }
        else if (enter == "no")
        {
            Console.WriteLine("¡SALIENDO DEL SISTEMA!");
            return;
        }
    }
    
    public static void productoDeseado()
    {
        // Pedir que producto desea comprar
        Console.WriteLine("¿Qué producto quieres comprar?");
        string productoDeseado = Console.ReadLine().ToLower();
        
        validarDisponible(productoDeseado); //Validar Producto
    }

    public static void cantidadProductos(string producto, int cantidad, decimal precio)
    {
        // Pedir que cantidad desea comprar
        Console.WriteLine($"¿Qué cantidad quieres comprar de {producto}?");
        int cantidadDeCompra = Convert.ToInt32(Console.ReadLine());
        if (cantidadDeCompra <= cantidad && cantidad > 0)
        {
            decimal suTotal = precio * cantidadDeCompra;
            subTotal += suTotal;
            Console.WriteLine($"Se agregaron {cantidadDeCompra} {producto}: SubTotal: {subTotal}"); // Mostrar productos agregados
            
            Console.WriteLine($"Quieres seguir comprando? si/no - [i] para ver inventario");
            string enter = Console.ReadLine().ToLower();
            if (enter == "si")
            {
                productoDeseado();
            } else if (enter == "i")
            {
                ShowStock();
                quiereComprar();
            }
            else if (enter == "no")
            {
                //LOGICA PARA DAR EL TOTAL MAS DESCUENTOS!===============
            }
        }
        else
        {
            Console.WriteLine($"No hay cantidad suficientes, tenemos {cantidad}");
            cantidadProductos(producto, cantidad, precio);
        }
    }

    public static void descuentos()
    {
        double porcentaje = subTotal > 20000 ? 0.20 : subTotal > 10000 ? 0.10 : 0;
        //PENDIENTE DESCONTAR PORCENTAJE!===============
    }

    public static void validarDisponible(string productoD)
    {
        foreach (var item in productos)
        {
            if (item.Key == productoD)
            {
                string producto = item.Key.ToLower();
                int cantidad = item.Value.stock;
                decimal precio = item.Value.precio;
                cantidadProductos(producto, cantidad, precio);
                return;
            }
        }
        Console.WriteLine("El producto debe ser un valor valido o no se encuentra");
        productoDeseado();
    }
}