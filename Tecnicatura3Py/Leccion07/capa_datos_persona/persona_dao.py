from capa_datos_persona import persona
from capa_datos_persona import conexion
from logger_base import log

class personaDAO:
    """"
    DAO significa: Data Access Object
    CRUD significa:
                    Create -> Insertar
                    Read ->Seleccionar
                    Update ->Actualizar
                    Delete -> Eliminar
    """
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_Personar'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %S)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHARE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHARE id_persona=%s'

    # Definimos los métodos de clse
    @classmethod
    def seleccionar(cls):
        with Conexion.obtenerConexion():
            with conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = [] # creamos una lista
                for registros in registros:
                    persona = persona(registro[0],registro[1],registro[2],registro[3])
                    personas.append(persona)
                return personas

    @classmethod
    def insertar(cls,persona):
        with Conexion.obtenerConexion():
            with conexion.obtenerCursor() as cursor:
                valores = (persona.nombre,persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f'persona Insetada: {persona}')
                return cursor.rowcount


    @classmethod
    def actualizar(cls,persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                Valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f'persona actualizada: {persona}')
                return  cursor


if __name__ == '__main__':
  #Actualizar un registro
  persona1 = persona(1,'Juan jose','pena', 'jjpena@mail.com')
  personas_actualizdas = personaDAO.actualizar(persona1)
  log.debug(f'Personas actualizadas: {personas_actualizdas}')


    # Insertar un registro
    #persona1 = Persona(nombre = 'Omero', apellido= 'Ramos',email= 'omeror@mail.com')
    #personas_insertadas = PersonaDAO.insertar(persona)
   # log.debug(f'Personas insertadas: {personas_insertadas}')


    # Seleccionamos objetos
personas = personaDAO.seleccionar()
for persona in personas:
        log.debug(persona)

