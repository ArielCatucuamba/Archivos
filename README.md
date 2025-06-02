## 👨‍🦰 Autor : Ariel Catucuamba

# 📁 Ionic Angular - Subida de Archivos a Supabase Storage

Este proyecto es una aplicación básica desarrollada con **Ionic Angular** que permite al usuario seleccionar un archivo desde su dispositivo y subirlo a un bucket de **Supabase Storage** llamado `archivos`.

---

## 🚀 ¿Qué hace el proyecto?

Permite al usuario:
- Seleccionar un archivo local desde su dispositivo.
- Subirlo a Supabase Storage en un bucket específico.
- Ver mensajes de éxito o error según el resultado.

---

## ⚙️ ¿Cómo lo hace?

### 🧩 Interfaz de usuario (UI)
- Muestra un formulario simple con:
  - Un campo para seleccionar archivos.
  - Un botón para iniciar la subida.


### 🧠 Lógica de subida
- Al hacer clic en “Subir”, se llama una función que:
  - Usa el cliente de Supabase configurado con tus credenciales.
  - Intenta subir el archivo al bucket `archivos`.
  - Muestra un mensaje de éxito o error.

---

## 🛠️ Funcionalidades principales

### `onFileSelected(event)`
- Se ejecuta al seleccionar un archivo.
- Guarda el archivo en la variable `selectedFile`.
- Resetea cualquier mensaje previo.

### `uploadFile(event)`
- Se ejecuta al enviar el formulario.
- Previene el comportamiento por defecto del `submit`.
- Usa Supabase para subir el archivo al bucket.
- Muestra mensaje de éxito o error según el resultado.
- Limpia la selección si todo salió bien.



## 🖼️ Capturas de Pantalla

> Puedes agregar imágenes aquí mostrando cómo funciona la app.  
> Para ello, colócalas en una carpeta `assets/screenshots` y actualiza los nombres en los enlaces.

### Interfaz principal
![image](https://github.com/user-attachments/assets/4fb387ee-f861-4520-8007-d19968a2f47c)


### Pantalla de selección de archivo
![image](https://github.com/user-attachments/assets/a3f2a811-ad9e-484c-8894-cf4918ecb056)


### Archivo cargado exitosamente
![image](https://github.com/user-attachments/assets/9e296827-6df3-4c57-b642-09d6d47662c5)


### Error al subir (en este caso es porque el archivo ya se encuentra subido)
![image](https://github.com/user-attachments/assets/d582dd52-39b1-4df0-9956-f3a2a8f87854)




---

## 📦 Requisitos

- Node.js y npm
- Ionic CLI (`npm install -g @ionic/cli`)
- Una cuenta y proyecto en [Supabase](https://supabase.com/)
- Credenciales de Supabase (URL y anon key)

---

## 🧪 Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
ionic serve
