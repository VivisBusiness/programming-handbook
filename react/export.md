# Exports

## Export default y Export const
En React, `export default` y `export const` son dos formas de exportar componentes.

* `export default`: se usa para todas esas funciones que solamente cumplen un objetivo, es decir, que no se van a reutilizar en otro archivo. Solo se puede tener un export default por archivo (se usa para los componentes principales).
* `export const`: indica que es un componente que se puede reutilizar en otros archivos, es decir, que se puede importar en otros archivos. Se pueden tener varios export const por archivo.