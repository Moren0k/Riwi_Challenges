#Lab Diccionario
edad = input("Ingresa la edad: ")
numbersDic = {
    1: "uno",
    2: "dos",
    3: {
        "nombre":"Kevin",
        "cc": 123456789,
        "edad": edad
    },
    4: "cuatro",
    5: "cinco",
}

for i in numbersDic:
    print(f"{i} Estos son los datos que hay {i-1}")


#Lab Listas
ccDic = numbersDic[3]["cc"]
ccEdad = numbersDic[3]["edad"]
print(ccDic)
print(ccEdad)


numbersList = [
        {
        1: "uno",
        2: "dos",
        3: {
            "nombre":"Kevin",
            "cc": 123456789,
        },
        4: "cuatro",
        5: "cinco",
    },
        {
        1: "uno",
        2: "dos",
        3: {
            "nombre":"Kevin",
            "cc": 123456789,
        },
        4: "cuatro",
        5: "cinco",
    }
]

ccLis = numbersList[0][3]["cc"]
namelis = numbersList[1][3]["nombre"]
#print(ccLis)
#print(namelis)