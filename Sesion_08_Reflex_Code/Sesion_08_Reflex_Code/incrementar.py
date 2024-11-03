

import reflex as rx

from rxconfig import config

class State(rx.State):
    conteo: int= 0
    def incrementar(self):
        self.conteo += 1
    def disminuir(self):
        self.conteo -= 1
    def on_load(self):
        self.conteo = 0
    def contador():
        return rx.fragment(
            rx.hstack(
                rx.button("Incrementar", on_click=State.incrementar), rx.text(State.conteo),
                rx.button("Disminuir", on_click=State.disminuir), )
        )
    def index() -> rx.Component:
        return rx.container(
            rx.color_mode.button(position="center"), 
            rx.vstack(
                rx.heading("Contar", size="30"), contador(),
            ),
            rx.logo(),
        )

app = rx.App() 
app.add_page(State.index)

