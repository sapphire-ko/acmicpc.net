use std::io;

fn main() {
    let mut s = String::new();

    io::stdin().read_line(&mut s).unwrap();

    let value = s
        .as_mut_str()
        .split_whitespace()
        .map(|s| s.parse::<i32>().unwrap())
				.map(|s| s.pow(2) % 10)
				.reduce(|a, b| (a + b) % 10)
				.unwrap();

    println!("{}", value);
}
