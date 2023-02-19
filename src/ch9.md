# CH9. 제네릭



## 제네릭이란?

Generic types are incredibly important in Rust. They are used in:

- the representation of nullable values (i.e. variables which might not have a value yet)
- error handling
- collections

Generic types allow us to partially define a `struct` or `enum`, enabling a compiler to create a fully defined version at compile-time based off our code usage.

Rust는 대부분 우리가 선언하는 변수의 타입을 추측할 수 있지만, 명시적으로 타입을 정의하는 것이 가장 좋습니다. 이렇게 타입을 명시하는 연산자를 "turbofish"라고 합니다.

```rust,ignore
::<T>
```

## 트레이트