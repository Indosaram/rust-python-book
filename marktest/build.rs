extern crate skeptic;

fn main() {
    // Get list of .md files in src directory
    let files = std::fs::read_dir("../src").unwrap();

    // To a array
    let files: Vec<_> = files.map(|f| f.unwrap().path()).collect();

    skeptic::generate_doc_tests(&files);
}
