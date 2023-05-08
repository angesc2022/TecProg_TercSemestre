package ar.com.system2023.MundoPc;

public class computadora {
    private final int idcomputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado Teclado;
    private Raton raton;
    private static int contadorcomputadoras;
   
    
//contructro vacio
    private computadora(){
        this.idcomputadora =++computadora.contadorcomputadoras;
    }
    
// contructor2
    public computadora(String nombre,Monitor monitor,Teclado teclado,Raton raton){
        this();
        this.nombre = nombre;
        this.monitor = monitor;
        this.Teclado = teclado;
        this.raton = raton;  
    }
    
    public int getIdcomputadora(){
        return idcomputadora;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Teclado getTeclado() {
        return Teclado;
    }

    public void setTeclado(Teclado Teclado) {
        this.Teclado = Teclado;
    }

    public Raton getRaton() {
        return raton;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }

    @Override
    public String toString() {
        return "computadora{" + "idcomputadora=" + idcomputadora + ", nombre=" + nombre + ", monitor=" + monitor + ", Teclado=" + Teclado + ", raton=" + raton + '}';
    }
   
}
