#[macro_use]
extern crate rocket;

use rocket::fs::NamedFile;
use std::path::PathBuf;

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![root, static_files])
}

#[get("/")]
async fn root() -> Option<NamedFile> {
    NamedFile::open("target/http/index.html").await.ok()
}

#[get("/<file..>", rank = 0)]
async fn static_files(file: PathBuf) -> Option<NamedFile> {
    let mut path = PathBuf::new();
    path.push("target/http");
    path.push(file);
    if path.is_dir() {
        path.push("index.html");
    }

    NamedFile::open(path).await.ok()
}
