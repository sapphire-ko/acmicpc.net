use std::io;

fn main() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).unwrap();
		let n = n.trim().parse::<i32>().unwrap();

		// println!("{}", n);

		let mut m = 1;

		let mut q = Vec::new();
		let mut p = Vec::new();
		for _ in 1..=n {
			let mut s = String::new();
			io::stdin().read_line(&mut s).unwrap();
			let s = s.trim().parse::<i32>().unwrap();

			for i in m..=s {
				p.push(m);
				q.push("+");
				m += 1;
			}

			let t = p.pop().unwrap();
			if(s != t) {
				println!("NO");
				return;
			}
			q.push("-");
		}

		// println!("p {:?}", p);
		// println!("q {:?}", q);

		let x = q.join("\n");
		println!("{}", x);
}
