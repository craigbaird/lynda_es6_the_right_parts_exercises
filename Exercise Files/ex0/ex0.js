// INSTRUCTIONS
// refactor code using ES6 syntax
// create arrow functions wherever possible
// use parentheses instead of curly braces

// ORIGINAL CODE
// (function IIFE(){

((foo, p, list1, list2) =>
	//use x and y as parameters
	// y uses default parameter values to make assignment
	// instead of doing a seperate assignment
	(foo = (x, y = x * 2) =>
	// function foo(x) {
	// 	var y = x * 2;
		// this is a name function expression, not a function statement
		// we use function syntax instead of arrow function syntax because you can't
		// use a dot call on an arrow function
		// if you try to bind the "this" context of an arrow function, it doesn't have one
		// and will ignore the dot call
		// for the setTimeout part below, it needed to adopt it's this binding from an
		// outer scope that had a this
		function bar(z, baz, obj) {
			if(z.length > 3) {
				// assignment expressions have the value that is assigned as the return
				// baz - we can assign and pass in the value at the same time
				// it needed a name so that we could refer to it recursively
				// further down in the code
				return z.map(baz = v =>
					v > 3 ? v + y : baz(v * 4)
				);
			}
			else {
				obj = [];

				setTimeout( () =>
					(obj.length = 1,
						// "this" gets it's this keyword from the outer function
						obj[0] = this.w)
					, 100
				);

				return obj;
			}
		},
		p = foo(2),
		list1 = [1,3,4],
		list2 = list1.concat(6),

		list1 = p.call( { w: 42 }, list1),
		list2 = p(list2),

		setTimeout( () =>
			// because console.log is an expression call it doesn't need any curly
			// braces around it; it can just exist as the body of the function
			console.log(list1[0] === list2.reduce( (s,v) => s + v, 0)
			, 200
		))
	))();

// ORIGINAL CODE
// 		return function bar(z) {
// 			if (z.length > 3) {
// 				return z.map( function baz(v){
// 					if (v > 3) return v + y;
// 					else return baz( v * 4 );
// 				} );
// 			}
// 			else {
// 				var obj = [];
//
// 				setTimeout( function bam(){
// 					obj.length = 1;
// 					obj[0] = this.w;
// 				}.bind( this ), 100 );
//
// 				return obj;
// 			}
// 		};
// 	}
//
// 	var p = foo( 2 );
// 	var list1 = [1,3,4];
// 	var list2 = list1.concat( 6 );
//
// 	list1 = p.call( { w: 42 }, list1 );
// 	list2 = p( list2 );
//
// 	setTimeout( function(){
// 		console.log( list1[0] === list2.reduce( function(s,v){
// 			return s + v;
// 		}, 0 ) );
// 	}, 200 );
// })();
