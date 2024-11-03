from Sesion_08_Reflex_Code.Sesion_08_Reflex_Code.Codigo import contar_tareas_por_estado
import reflex as rx

class EstadoTareas(rx.State):
    def __init__(self):
        super().__init__()
        self.tareas = [
            {"nombre": "Terminar informe Reflex", "estado": "En Progreso"},
            {"nombre": "Diapositivas del paper GDI", "estado": "En Progreso"},
            {"nombre": "Terminar informe React-Route", "estado": "Completada"},
            {"nombre": "Repasar curso Infraestructura", "estado": "Por Hacer"},
        ]
    def agregar_tarea(self, nueva_tarea, estado):
        self.tareas.append({"nombre": nueva_tarea, "estado": estado})
        
    def contar_tareas_por_estado(tareas):
        contador = {}
        for tarea in tareas:
            estado = tarea["estado"] 
            if estado in contador:
                contador[estado] += 1 
            else:
                contador[estado] = 1
            return contador

    @rx.component
    def TableroKanban():
        tareas = EstadoTareas.tareas
        contadores = contar_tareas_por_estado(tareas)
        return rx.div(
            rx.h2("Tablero Kanban"),
            rx.div(
            rx.h3("Por Hacer"),
            rx.ul([rx.li(tarea["nombre"]) for tarea in tareas if tarea["estado"] == "Por Hacer"]), rx.div(f"Total: {contadores.get('Por Hacer', 0)}"),
            ),
            rx.div(
            rx.h3("En Progreso"),
            rx.ul([rx.li(tarea["nombre"]) for tarea in tareas if tarea["estado"] == "En Progreso"]), rx.div(f"Total: {contadores.get('En Progreso', 0)}"),
            ),
            rx.div(
            rx.h3("Completada"),
            rx.ul([rx.li(tarea["nombre"]) for tarea in tareas if tarea["estado"] == "Completada"]), rx.div(f"Total: {contadores.get('Completada', 0)}"),
            ),
            )

    def App():
        return rx.div( 
            TableroKanban(),
        )

    if __name__ == "__main__": rx.run(App)