import reflex as rx 
from rxconfig import config
class EstadoTareas(rx.State): 
    def __init__(self): 
        super().__init__() 
        self.tareas = ["Tarea 1", "Tarea 2"] 
    def agregar_tarea(self, nueva_tarea): 
        self.tareas.append(nueva_tarea) 
    def lista_tareas(): 
        return rx.fragment( 
        rx.heading("Lista de Tareas"), 
        rx.ul([rx.li(tarea) for tarea in EstadoTareas.tareas]), 
        ) 
    def agregar_tarea(): 
        nueva_tarea = rx.input(placeholder="Agregar tarea...") 
        return rx.fragment( 
        nueva_tarea, 
        rx.button("Agregar", on_click=lambda: EstadoTareas.agregar_tarea(nueva_tarea.value)) 
        )
    def index(self) -> rx.Component:
        return rx.container(
            rx.color_mode.button(position="center"), 
            rx.vstack(
                rx.button("Agregar nueva tarea", on_click=lambda: self.agregar_tarea()),
                rx.button("Mostrar lista de tareas", on_click=lambda: self.lista_tareas()),
            ),
            rx.logo(),
        )


app = rx.App() 
app.add_page(index)
