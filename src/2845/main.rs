use std::io;

fn main() {
    let mut s = String::new();

    io::stdin().read_line(&mut s).unwrap();

    let values:Vec<i32> = s
        .as_mut_str()
        .split_whitespace()
        .map(|s| s.parse().unwrap())
        .collect();

		let l = values[0];
		let p = values[1];

		let x = l * p;

		s.clear();
    io::stdin().read_line(&mut s).unwrap();

    let values:Vec<i32> = s
        .as_mut_str()
        .split_whitespace()
        .map(|s| s.parse::<i32>().unwrap())
				.map(|s| s - x)
        .collect();

		println!("{}", values.into_iter().map(|x| x.to_string()).collect::<Vec<String>>().join(" "));
}
