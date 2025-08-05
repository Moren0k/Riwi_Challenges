use.tienda

db.clientes.find(
    {edad:{$lt:30}} // Encuentra todos los valores con la edad menor a 30
)

db.clientes.find(
    {nombre:{$eq:21}} // Encuentra todos los valores que son iguales a 21
)

db.clientes.find(
    {genero:{$in:["F","M"]}} // Encuentra todos los documentos que sea genero femenino y masculino
)

db.clientes.find(
    {edad:{$gt:20},genero:"F"} // Encuentra los documentos que son mayores a 21 y son genero "F"
)


db.clientes.find(
    {nombre:{$regex:"A"}} // Encuentra todos los nombres que comienzan con la "A"
)