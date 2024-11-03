import reflex as rx 
from rxconfig import config

class EstadoFormulario(rx.State): 
    def __init__(self): 
        super().__init__() 
        self.nombre = "" 
        self.email = "" 
        self.mensaje = "" 

    def enviar_formulario(self): 
        if "@" not in self.email or "." not in self.email: 
            rx.notify("Error: Dirección de correo electrónico no válida") 
        elif not self.nombre:
            rx.notify("Error: El nombre no puede estar vacío")
        elif not self.mensaje:
            rx.notify("Error: El mensaje no puede estar vacío")
        else:
            try:
                response = requests.post("https://api.com/enviar", json={
                    "nombre": self.nombre,
                    "email": self.email,
                    "mensaje": self.mensaje
                })

                if response.status_code == 200:
                    rx.notify("Formulario enviado correctamente")
                    self.nombre = ""
                    self.email = ""
                    self.mensaje = ""
                else:
                    rx.notify("Error al enviar el formulario. Inténtalo de nuevo.")
            except Exception as e:
                rx.notify(f"Error al enviar el formulario: {str(e)}")

    def formulario_contacto(self): 
        return rx.fragment( 
            rx.heading("Formulario de Contacto"), 
            rx.form( 
                rx.input( 
                    placeholder="Nombre", 
                    on_change=lambda valor: setattr(self, "nombre", valor) 
                ), 
                rx.input( 
                    placeholder="Correo electrónico", 
                    on_change=lambda valor: setattr(self, "email", valor) 
                ), 
                rx.textarea( 
                    placeholder="Mensaje", 
                    on_change=lambda valor: setattr(self, "mensaje", valor) 
                ), 
                rx.button("Enviar", on_click=lambda: self.enviar_formulario()),  
            ), 
        )

    def index(self) -> rx.Component:
        return rx.container(
            self.formulario_contacto()
        )


app = rx.App() 
app.add_page(EstadoFormulario.index)
