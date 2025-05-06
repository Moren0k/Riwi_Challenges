print("\n---Bienvenido a la Calculadora de Promedios de Estudiantes---")
countStudents = int(input("¿Cuántos estudiantes quieres ingresar? "))
grades = []

def add_student(countStudents, grades):
    for i in range(countStudents):
        nameStudent = input("Ingresa el nombre del estudiante: ")
        for i in range(3):
            grade = float(input(f"Ingrese la nota {i + 1} de {nameStudent}: "))
            grades.append(grade)
    return nameStudent, grades

def calculate_promedio(grades):
    return sum(grades) / len(grades)

def aprove_student(promedio):
    if promedio >= 3.0:
        print("El estudiante ha aprobado.")
    else:
        print("El estudiante ha reprobado.")
        
def main():
    nameStudent, grades = add_student(countStudents)
    promedio = calculate_promedio(grades)
    print(f"El promedio de {nameStudent} es: {promedio}")
    aprove_student(promedio)

main()
# Este código permite ingresar el nombre de un estudiante y sus notas, calcula el promedio y determina si el estudiante aprobó o reprobó.