import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLogeado: boolean = false;
  loginForm: FormGroup | undefined;

  onSubmit() {
    throw new Error('Method not implemented.');
  }
  title = 'Mesiverario';

  constructor(private fb: FormBuilder) {
    setInterval(this.createFlower, 100);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      nombre: ['', Validators.required], // Campo de usuario requerido
      clave: ['', Validators.required], // Campo de contraseña requerido
    });
  }

  createFlower() {
    var flower = document.createElement('div');
    flower.classList.add('flower');
    var xPos = Math.random() * window.innerWidth;
    var yPos = window.innerHeight; // Posición vertical al fondo de la pantalla
    var size = Math.random() * 50 + 10;

    // Crear elemento <img> y establecer su atributo src a la imagen de una flor
    var img = document.createElement('img');
    img.src = '../assets/flow.png'; // Reemplaza con la ruta de tu imagen de flor
    img.style.width = `${size}px`; // Establecer el tamaño de la imagen
    img.style.height = `${size}px`;

    // Establecer posición y estilos CSS para la flor
    flower.style.position = 'absolute';
    flower.style.left = `${xPos}px`; // Posición horizontal aleatoria
    flower.style.top = `${yPos}px`; // Posición vertical al fondo de la pantalla

    // Agregar la imagen al div de la flor
    flower.appendChild(img);

    document.getElementById('flower-container')?.appendChild(flower);

    // Animación de subida de la flor
    setTimeout(() => {
      var interval = setInterval(() => {
        yPos -= 1; // Mover la flor hacia arriba
        flower.style.top = `${yPos}px`;

        // Eliminar la flor cuando alcanza la parte superior de la pantalla
        if (yPos <= 0) {
          clearInterval(interval);
          flower.remove();
        }
      }, 20); // Intervalo de tiempo para el movimiento de la flor
    }, 100); // Retraso para empezar la animación de subida
  }

  obtenerDatos() {
    const nombre = this.loginForm?.get('nombre')?.value;
    const clave = this.loginForm?.get('clave')?.value;
    console.log(nombre);
    console.log(nombre);

    if (nombre == 'Karina' && clave == '26-07-2023') {
      this.isLogeado = true;
      const audioElement = new Audio('../assets/M.A.I.mp3');
      audioElement.volume = 0.2;
      audioElement.play();
    } else {
      this.loginForm?.get('nombre')?.setValue('');
      this.loginForm?.get('clave')?.setValue('');
    }
  }
}
