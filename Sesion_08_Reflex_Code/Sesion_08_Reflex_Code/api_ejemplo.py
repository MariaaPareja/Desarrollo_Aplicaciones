import reflex as rx # type: ignore
import httpx # type: ignore

async def obtener_datos_api():
    async with httpx.AsyncClient() as cliente:
        respuesta = await cliente.get("https://jsonplaceholder.typicode.com/posts")
        respuesta.raise_for_status()  
        return respuesta.json()  

class EstadoDatosAPI(rx.State):
    def __init__(self):
        super().__init__()
        self.datos = []  

    async def cargar_datos(self):
        self.datos = await obtener_datos_api() 

def mostrar_datos_api():
    estado = EstadoDatosAPI()  
    return rx.fragment(
        rx.button("Cargar Datos", on_click=lambda: estado.cargar_datos()),  
        rx.ul([rx.li(dato['title']) for dato in estado.datos]), 
    )

app = rx.App()
app.add_page(mostrar_datos_api)  