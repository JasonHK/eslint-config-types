// Type definitions for @jasonhk/eslint-config-types 
// Definitions by: Jason Kwok <https://github.com/JasonHK>

type Prepend<Tuple extends any[], Addend> = ((_: Addend, ..._1: Tuple) => any) extends ((
	..._: infer Result
) => any) ? Result : never;
