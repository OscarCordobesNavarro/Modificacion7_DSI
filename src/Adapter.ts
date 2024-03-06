/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Autor: Óscar Cordobés Navarro
 * Correo: alu0101478081@ull.edu.es
 * Fecha: 06/03/2024
 * Modificacion 
 */

import { Complex } from "./Complex";
import { Rational } from "./Rational";

/**
 * Clase Adapter que extiende la clase Complex y adapta un número racional a un número complejo.
 */
export class Adapter extends Complex {
    /**
     * Constructor de la clase Adapter.
     * @param racional El número racional a adaptar.
     */
    constructor(private racional: Rational) {
        super(racional.getValue(), 0)
    }

    /**
     * Método para sumar un número complejo al número adaptado.
     * @param complex El número complejo a sumar.
     * @returns El resultado de la suma.
     */
    add(complex: Complex): Complex {
        return super.add(complex);
    }

    /**
     * Método para restar un número complejo al número adaptado.
     * @param complex El número complejo a restar.
     * @returns El resultado de la resta.
     */
    subtract(complex: Complex): Complex {
        return super.subtract(complex);
    }

    /**
     * Método para multiplicar el número adaptado por un número complejo.
     * @param complex El número complejo a multiplicar.
     * @returns El resultado de la multiplicación.
     */
    multiply(complex: Complex): Complex {
        return super.multiply(complex);
    }

    /**
     * Método para dividir el número adaptado entre un número complejo.
     * @param complex El número complejo divisor.
     * @returns El resultado de la división.
     */
    divide(complex: Complex): Complex {
        return super.divide(complex);
    }
}