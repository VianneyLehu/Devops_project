import { expect, test } from "vitest";
import { add, createUser, isadult } from "./exo1";

test('add function correctly two numbers', () =>{
    const a = 2;
    const b = 3;

    const result = add(a,b);

    expect(result).toBe(5);
})

test('CreateUSer correctly create a user object', () =>{
    const name = 'John Pork';
    const age = 18;

    const user = createUser(name, age);

    expect(user.name).toBe(name);
    expect(user.age).toBe(age);

});


test('isAdult returns false for user under 18', () =>{
    const user = createUser('Jimmy doe', 17);

    const result = isadult(user);

    expect(result).toBe(false);
})