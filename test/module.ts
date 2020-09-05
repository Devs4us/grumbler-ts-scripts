export { render } from "./component";

export async function foo(): Promise<any> {
  const { baz, ...rest } = { baz: 123, x: 1 };
  const berk = { y: 7, ...rest };

  //const { x } = await import("./dependency");

  return await new Foo().baz();
}

export class Foo {
  bar = 1337;

  baz(): number {
    return 5;
  }
}
