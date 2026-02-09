import { bakeFeature } from "../helpers/bake-feature.mjs";

export function bakeLocalization(font, flags) {
	if (flags.mono || flags.term || flags.pwid) return;

	let langTag = "JAN ";
	switch (flags.region) {
		case "JPN":
			langTag = "JAN ";
			break;
		case "CHS":
			langTag = "ZHS ";
			break;
		case "CHT":
			langTag = "ZHH ";
			break;
	}

	bakeFeature("locl", font, c => c != 0x2010, "hani", langTag);
}
