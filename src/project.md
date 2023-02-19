

MongoDB 설치 혹은 MongoDB Atlas 이용





Cargo.toml

```toml
[package]
name = "chat_server"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
rocket = {version = "0.5.0-rc.1", features = ["json"]}
bson = { version = "2", features = ["chrono-0_4"] }
chrono = "0.4"
dotenv = "0.15.0"
serde_with = "2.0.1"
rocket_cors = { git = "https://github.com/lawliet89/rocket_cors", branch = "master" }

[dev-dependencies]
rand = "0.8.4"

[dependencies.mongodb]
version = "2.2.0"
default-features = false
features = ["sync"] 
```



```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);

    println!("{} {}", black.0, origin.0);
}

```

