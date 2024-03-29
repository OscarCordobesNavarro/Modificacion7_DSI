/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Autor: Óscar Cordobés Navarro
 * Correo: alu0101478081@ull.edu.es
 * Fecha: 18/02/2024
 * Práctica 6: Clases e interfaces genéricas. Principios SOLID
 */

import { Arithmeticable } from "./Arithmeticable";

/**
 * Representa un número complejo con una parte real y una parte imaginaria.
 */
export class Complex implements Arithmeticable<Complex> {
  private real: number;
  private imaginary: number;

  /**
   * Crea una instancia de la clase Complex.
   * @param real La parte real del número complejo.
   * @param imaginary La parte imaginaria del número complejo.
   */
  constructor(real: number, imaginary: number) {
    this.real = real;
    this.imaginary = imaginary;
  }

  /**
   * Realiza la suma de dos números complejos.
   * @param b El número complejo a sumar.
   * @returns El resultado de la suma.
   */
  add(b: Complex): Complex {
    return new Complex(this.real + b.real, this.imaginary + b.imaginary);
  }

  /**
   * Realiza la resta de dos números complejos.
   * @param b El número complejo a restar.
   * @returns El resultado de la resta.
   */
  subtract(b: Complex): Complex {
    return new Complex(this.real - b.real, this.imaginary - b.imaginary);
  }

  /**
   * Realiza la multiplicación de dos números complejos.
   * @param b El número complejo a multiplicar.
   * @returns El resultado de la multiplicación.
   */
  multiply(b: Complex): Complex {
    return new Complex(
      this.real * b.real - this.imaginary * b.imaginary,
      this.real * b.imaginary + this.imaginary * b.real,
    );
  }

  /**
   * Realiza la división de dos números complejos.
   * @param b El número complejo a dividir.
   * @returns El resultado de la división.
   */
  divide(b: Complex): Complex {
    if (b.real === 0 && b.imaginary === 0) {
      throw new Error("No se puede dividir por 0");
    }
    return new Complex(
      (this.real * b.real + this.imaginary * b.imaginary) /
        (b.real * b.real + b.imaginary * b.imaginary),
      (this.imaginary * b.real - this.real * b.imaginary) /
        (b.real * b.real + b.imaginary * b.imaginary),
    );
  }

  /**
   * Devuelve una representación en cadena del número complejo.
   * @returns La representación en cadena del número complejo.
   */
  toString(): string {
    return `${this.real} + ${this.imaginary}i`;
  }

  /**
   * Devuelve la parte real del número complejo.
   * @returns La parte real del número complejo.
   */
  getRealPart(): number {
    return this.real;
  }

    /**
   * Devuelve la parte imaginaria del número complejo.
   * @returns La parte imaginaria del número complejo.
   */
  getImaginaryPart(): number {
    return this.imaginary;
  }
}
