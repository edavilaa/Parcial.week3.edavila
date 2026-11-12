# Parcial MISW-4104 – Aplicación de Cafés

Aplicación desarrollada en Angular para consultar y visualizar variedades de café colombiano.

## Funcionalidades

- Módulo de cafés y modelo `Cafe`.
- Servicio HTTP para consumir el archivo JSON proporcionado en el parcial.
- Listado de cafés en una tabla Bootstrap con nombre, tipo y región.
- Conteo dinámico de cafés de origen y cafés Blend.
- Pruebas unitarias del componente para validar tres registros y el encabezado de la tabla.

## Tecnologías

- Angular 22
- TypeScript
- Bootstrap
- RxJS
- Vitest

## Ejecución

Instalar dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
ng serve -o
```

Ejecutar las pruebas:

```bash
ng test --watch=false
```

## Resultado de pruebas

**4 pruebas aprobadas de 4 ejecutadas (4/4).**

## Autor

e.davila@uniandes.edu.co – MISW-4104, Universidad de los Andes.