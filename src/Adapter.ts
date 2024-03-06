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

export class Adapter extends Complex {
    constructor(private racional: Rational) {
        super(racional.getValue(), 0)
    }

    add(complex: Complex): Complex {
        return super.add(complex);
    }

    subtract(complex: Complex): Complex {
        return super.subtract(complex);
    }

    multiply(complex: Complex): Complex {
        return super.multiply(complex);
    }

    divide(complex: Complex): Complex {
        return super.divide(complex);
    }
}