using Customers.Application.Services;
using Customers.Domain.Models;

var builder = WebApplication.CreateBuilder(args);

//Inject dependency
builder.Services.AddSingleton<ProductService>();


// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Exponer los EndPoints

/*PRODUCT*/
app.MapGet("/getProduct", (ProductService productService) => //GET
{
    return Results.Ok(productService.GetProducts());
});

app.MapPost("/addProduct", (Product product, ProductService productService) => //POST
{
    var newProduct = productService.AddProduct(product);
    return Results.Created($"api/product/{product.Id}", newProduct);
});

app.MapPatch("/updateProduct/{id}", (Product product, ProductService productService) => //PATCH
{
    return productService.UpdateProduct(product);
});

app.MapDelete("/deleteProduct/{id}", (int id, ProductService productService) => //DELETE
{
    return productService.DeleteProduct(id);
});

app.MapGet("/weatherforecast", () =>
{
    var forecast = new[]
    {
        new { Date = DateTime.Now, TemperatureC = 25, Summary = "Warm" }
    };
    return forecast;
});


app.Run();
