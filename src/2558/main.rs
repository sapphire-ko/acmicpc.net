use std::io::{self, BufRead};

fn main() {
	let mut a = 0;

	let stdin = io::stdin();
	for line in stdin.lock().lines() {
		a = a + line.unwrap().trim().parse::<i32>().unwrap();
	}

	println!("{}", a);
}
