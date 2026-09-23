# Publish to Crates.io

## Before You Publish

### API Token

1. Log in at <https://crates.io/>
2. Go to **Account Settings**, then **API Tokens**
3. Click “New Token”
4. Give it a unique name.
5. Set an expiration date (optional)
6. Select the scopes you need. I used `publish-new`, `publish-update`, and `yank`.
7. Click “Generate Token”.

The generated API token value will look similar to this:

```txt
ciowhNhkHp4WpZCYjA27AENzrhO9c9T9m4r
```

It is stored on crates.io as a hash (for security), and is only displayed once. Make sure you document it in a safe place.

This step only needs to be done once, unless you forget your token value, or it becomes compromised. In that case, you'll need to revoke it and generate a new one.

### Log In

Open a terminal, and type:

```bash
cargo login
```

When prompted, paste your generated token.

This token will be stored locally in `~/.cargo/credentials.toml`. If you ever need to use a different token, first logout:

```bash
cargo logout
```

This removes the token from your credentials file. Then, you can log in again.

## Metadata in Cargo.toml

Tag | Example
-----|-----
license | “MIT OR Apache-2.0”
description | “A short description of my package”
homepage | "https://serde.rs"
documentation | "https://docs.rs/bitflags"
repository | "https://github.com/rust-lang/cargo"
readme | “README.md”

Source: <https://doc.rust-lang.org/cargo/reference/manifest.html>

## Validate and Publish

Check your project for warnings and errors:

```bash
cargo package
```

You can also list the contents of the generated .crate file:

```bash
cargo package --list
```

When you're ready to publish:

```bash
cargo publish
```

## Sources

<https://doc.rust-lang.org/cargo/reference/publishing.html>
