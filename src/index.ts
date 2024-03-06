import { Complex } from "./Complex";
import { Rational } from "./Rational";
import { Adapter } from "./Adapter";

const complex1 = new Complex(3, 4);
const racional1 = new Rational(1, 3)
const adapter = new Adapter(racional1);

adapter.add(complex1);

console.log(adapter.add(complex1).toString());