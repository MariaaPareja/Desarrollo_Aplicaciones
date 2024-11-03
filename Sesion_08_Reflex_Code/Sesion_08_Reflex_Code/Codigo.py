import reflex as rx
 
# Lista de todas las tareas
todas_las_tareas = [
    {"titulo": "Tarea 1", "estado": "Pendiente"},
    {"titulo": "Tarea 2", "estado": "En Progreso"},
    {"titulo": "Tarea 3", "estado": "Completada"},
    {"titulo": "Tarea 4", "estado": "Pendiente"},
    {"titulo": "Tarea 5", "estado": "En Progreso"},
    {"titulo": "Tarea 6", "estado": "Completada"},
]
 
# Filtrar tareas según el estado
tareas_en_progreso = [tarea for tarea in todas_las_tareas if tarea["estado"] == "En Progreso"]
tareas_completadas = [tarea for tarea in todas_las_tareas if tarea["estado"] == "Completada"]
tareas_pendientes = [tarea for tarea in todas_las_tareas if tarea["estado"] == "Pendiente"]
 
# Contar tareas por estado
def contar_tareas_por_estado(tareas):
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        contadores[estado] = contadores.get(estado, 0) + 1
    return contadores
 
# Tarjeta para cada tarea
def tarjeta_tarea(tarea):
    return rx.div(tarea["titulo"])
 
# Columna del kanban con condicionales para mostrar tareas pendientes si es necesario
def columna_kanban(nombre, tareas, state):
    if state.mostrar_solo_pendientes:
        tareas = [t for t in tareas if t["estado"] == "Pendiente"]
    return rx.div(
        rx.heading(nombre),
        rx.div([tarjeta_tarea(tarea) for tarea in tareas])
    )
 
# Estado de la aplicación
class State(rx.State):
    mostrar_solo_pendientes: bool = False
 
    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True
 
# Función principal de la interfaz
def index():
    contadores = contar_tareas_por_estado(todas_las_tareas)
    state = State()  # Asegurar que el estado sea instanciado aquí
    return rx.div(
        rx.button("Mostrar Pendientes", on_click=state.mostrar_pendientes),
        columna_kanban("En Progreso", tareas_en_progreso, state),
        columna_kanban("Completadas", tareas_completadas, state),
        rx.div(f"Pendientes: {contadores.get('Pendiente', 0)}"),
        rx.div(f"En Progreso: {contadores.get('En Progreso', 0)}"),
        rx.div(f"Completadas: {contadores.get('Completada', 0)}")
    )
