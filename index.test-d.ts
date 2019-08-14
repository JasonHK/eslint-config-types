"use strict";

import { expectType } from "tsd";

import {
    ESLintConfig, RuleEntry, RuleLevel, RuleLevelAndOptions, RulesRecord,
} from "./index";

expectType<RuleLevel>(0);
expectType<RuleLevel>(1);
expectType<RuleLevel>(2);
expectType<RuleLevel>("off");
expectType<RuleLevel>("warn");
expectType<RuleLevel>("error");

expectType<RuleLevelAndOptions>([0]);
expectType<RuleLevelAndOptions>([1]);
expectType<RuleLevelAndOptions>([2]);
expectType<RuleLevelAndOptions>(["off"]);
expectType<RuleLevelAndOptions>(["warn"]);
expectType<RuleLevelAndOptions>(["error"]);

expectType<RuleEntry>(0);
expectType<RuleEntry>(1);
expectType<RuleEntry>(2);
expectType<RuleEntry>("off");
expectType<RuleEntry>("warn");
expectType<RuleEntry>("error");
expectType<RuleEntry>([0]);
expectType<RuleEntry>([1]);
expectType<RuleEntry>([2]);
expectType<RuleEntry>(["off"]);
expectType<RuleEntry>(["warn"]);
expectType<RuleEntry>(["error"]);

expectType<RulesRecord>({});
expectType<RulesRecord>({
    sample01: 0,
    sample02: 1,
    sample03: 2,
    sample04: "off",
    sample05: "warn",
    sample06: "error",

    sample07: [0],
    sample08: [1],
    sample09: [2],
    sample10: ["off"],
    sample11: ["warn"],
    sample12: ["error"],
});

expectType<ESLintConfig>({});
expectType<ESLintConfig>({
    rules: {},
});
expectType<ESLintConfig>({
    rules: {
        sample01: 0,
        sample02: 1,
        sample03: 2,
        sample04: "off",
        sample05: "warn",
        sample06: "error",
    
        sample07: [0],
        sample08: [1],
        sample09: [2],
        sample10: ["off"],
        sample11: ["warn"],
        sample12: ["error"],
    },
});

type SampleOptions = [
    "always" | "as-needed" | "never",
    Partial<{
        generators: "always" | "as-needed" | "never";
    }>,
];

expectType<RuleLevelAndOptions<SampleOptions>>([0]);
expectType<RuleLevelAndOptions<SampleOptions>>([1]);
expectType<RuleLevelAndOptions<SampleOptions>>([2]);
expectType<RuleLevelAndOptions<SampleOptions>>(["off"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["warn"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["error"]);

expectType<RuleLevelAndOptions<SampleOptions>>([0, "always"]);
expectType<RuleLevelAndOptions<SampleOptions>>([1, "always"]);
expectType<RuleLevelAndOptions<SampleOptions>>([2, "always"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["off", "always"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["warn", "always"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["error", "always"]);

expectType<RuleLevelAndOptions<SampleOptions>>([0, "as-needed"]);
expectType<RuleLevelAndOptions<SampleOptions>>([1, "as-needed"]);
expectType<RuleLevelAndOptions<SampleOptions>>([2, "as-needed"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["off", "as-needed"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["warn", "as-needed"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["error", "as-needed"]);

expectType<RuleLevelAndOptions<SampleOptions>>([0, "never"]);
expectType<RuleLevelAndOptions<SampleOptions>>([1, "never"]);
expectType<RuleLevelAndOptions<SampleOptions>>([2, "never"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["off", "never"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["warn", "never"]);
expectType<RuleLevelAndOptions<SampleOptions>>(["error", "never"]);

expectType<RuleLevelAndOptions<SampleOptions>>([0, "always", { generators: "always" }]);
expectType<RuleLevelAndOptions<SampleOptions>>([1, "always", { generators: "always" }]);
expectType<RuleLevelAndOptions<SampleOptions>>([2, "always", { generators: "always" }]);
expectType<RuleLevelAndOptions<SampleOptions>>(["off", "always", { generators: "always" }]);
expectType<RuleLevelAndOptions<SampleOptions>>(["warn", "always", { generators: "always" }]);
expectType<RuleLevelAndOptions<SampleOptions>>(["error", "always", { generators: "always" }]);

expectType<RuleLevelAndOptions<SampleOptions>>([0, "as-needed", { generators: "as-needed" }]);
expectType<RuleLevelAndOptions<SampleOptions>>([1, "as-needed", { generators: "as-needed" }]);
expectType<RuleLevelAndOptions<SampleOptions>>([2, "as-needed", { generators: "as-needed" }]);
expectType<RuleLevelAndOptions<SampleOptions>>(["off", "as-needed", { generators: "as-needed" }]);
expectType<RuleLevelAndOptions<SampleOptions>>(["warn", "as-needed", { generators: "as-needed" }]);
expectType<RuleLevelAndOptions<SampleOptions>>(["error", "as-needed", { generators: "as-needed" }]);

expectType<RuleLevelAndOptions<SampleOptions>>([0, "never", { generators: "never" }]);
expectType<RuleLevelAndOptions<SampleOptions>>([1, "never", { generators: "never" }]);
expectType<RuleLevelAndOptions<SampleOptions>>([2, "never", { generators: "never" }]);
expectType<RuleLevelAndOptions<SampleOptions>>(["off", "never", { generators: "never" }]);
expectType<RuleLevelAndOptions<SampleOptions>>(["warn", "never", { generators: "never" }]);
expectType<RuleLevelAndOptions<SampleOptions>>(["error", "never", { generators: "never" }]);

expectType<RuleEntry<SampleOptions>>(0);
expectType<RuleEntry<SampleOptions>>(1);
expectType<RuleEntry<SampleOptions>>(2);
expectType<RuleEntry<SampleOptions>>("off");
expectType<RuleEntry<SampleOptions>>("warn");
expectType<RuleEntry<SampleOptions>>("error");

expectType<RuleEntry<SampleOptions>>([0]);
expectType<RuleEntry<SampleOptions>>([1]);
expectType<RuleEntry<SampleOptions>>([2]);
expectType<RuleEntry<SampleOptions>>(["off"]);
expectType<RuleEntry<SampleOptions>>(["warn"]);
expectType<RuleEntry<SampleOptions>>(["error"]);

expectType<RuleEntry<SampleOptions>>([0, "always"]);
expectType<RuleEntry<SampleOptions>>([1, "always"]);
expectType<RuleEntry<SampleOptions>>([2, "always"]);
expectType<RuleEntry<SampleOptions>>(["off", "always"]);
expectType<RuleEntry<SampleOptions>>(["warn", "always"]);
expectType<RuleEntry<SampleOptions>>(["error", "always"]);

expectType<RuleEntry<SampleOptions>>([0, "as-needed"]);
expectType<RuleEntry<SampleOptions>>([1, "as-needed"]);
expectType<RuleEntry<SampleOptions>>([2, "as-needed"]);
expectType<RuleEntry<SampleOptions>>(["off", "as-needed"]);
expectType<RuleEntry<SampleOptions>>(["warn", "as-needed"]);
expectType<RuleEntry<SampleOptions>>(["error", "as-needed"]);

expectType<RuleEntry<SampleOptions>>([0, "never"]);
expectType<RuleEntry<SampleOptions>>([1, "never"]);
expectType<RuleEntry<SampleOptions>>([2, "never"]);
expectType<RuleEntry<SampleOptions>>(["off", "never"]);
expectType<RuleEntry<SampleOptions>>(["warn", "never"]);
expectType<RuleEntry<SampleOptions>>(["error", "never"]);

expectType<RuleEntry<SampleOptions>>([0, "always", { generators: "always" }]);
expectType<RuleEntry<SampleOptions>>([1, "always", { generators: "always" }]);
expectType<RuleEntry<SampleOptions>>([2, "always", { generators: "always" }]);
expectType<RuleEntry<SampleOptions>>(["off", "always", { generators: "always" }]);
expectType<RuleEntry<SampleOptions>>(["warn", "always", { generators: "always" }]);
expectType<RuleEntry<SampleOptions>>(["error", "always", { generators: "always" }]);

expectType<RuleEntry<SampleOptions>>([0, "as-needed", { generators: "as-needed" }]);
expectType<RuleEntry<SampleOptions>>([1, "as-needed", { generators: "as-needed" }]);
expectType<RuleEntry<SampleOptions>>([2, "as-needed", { generators: "as-needed" }]);
expectType<RuleEntry<SampleOptions>>(["off", "as-needed", { generators: "as-needed" }]);
expectType<RuleEntry<SampleOptions>>(["warn", "as-needed", { generators: "as-needed" }]);
expectType<RuleEntry<SampleOptions>>(["error", "as-needed", { generators: "as-needed" }]);

expectType<RuleEntry<SampleOptions>>([0, "never", { generators: "never" }]);
expectType<RuleEntry<SampleOptions>>([1, "never", { generators: "never" }]);
expectType<RuleEntry<SampleOptions>>([2, "never", { generators: "never" }]);
expectType<RuleEntry<SampleOptions>>(["off", "never", { generators: "never" }]);
expectType<RuleEntry<SampleOptions>>(["warn", "never", { generators: "never" }]);
expectType<RuleEntry<SampleOptions>>(["error", "never", { generators: "never" }]);

interface SampleRules extends RulesRecord {
    [rule: string]: RuleEntry<SampleOptions>;
}

expectType<RulesRecord>({});
expectType<RulesRecord>({
    sample01: 0,
    sample02: 1,
    sample03: 2,
    sample04: "off",
    sample05: "warn",
    sample06: "error",

    sample07: [0],
    sample08: [1],
    sample09: [2],
    sample10: ["off"],
    sample11: ["warn"],
    sample12: ["error"],

    sample13: [0, "always"],
    sample14: [1, "always"],
    sample15: [2, "always"],
    sample16: ["off", "always"],
    sample17: ["warn", "always"],
    sample18: ["error", "always"],
    
    sample19: [0, "as-needed"],
    sample20: [1, "as-needed"],
    sample21: [2, "as-needed"],
    sample22: ["off", "as-needed"],
    sample23: ["warn", "as-needed"],
    sample24: ["error", "as-needed"],
    
    sample25: [0, "never"],
    sample26: [1, "never"],
    sample27: [2, "never"],
    sample28: ["off", "never"],
    sample29: ["warn", "never"],
    sample30: ["error", "never"],
    
    sample31: [0, "always", { generators: "always" }],
    sample32: [1, "always", { generators: "always" }],
    sample33: [2, "always", { generators: "always" }],
    sample34: ["off", "always", { generators: "always" }],
    sample35: ["warn", "always", { generators: "always" }],
    sample36: ["error", "always", { generators: "always" }],
    
    sample37: [0, "as-needed", { generators: "as-needed" }],
    sample38: [1, "as-needed", { generators: "as-needed" }],
    sample39: [2, "as-needed", { generators: "as-needed" }],
    sample40: ["off", "as-needed", { generators: "as-needed" }],
    sample41: ["warn", "as-needed", { generators: "as-needed" }],
    sample42: ["error", "as-needed", { generators: "as-needed" }],
    
    sample43: [0, "never", { generators: "never" }],
    sample44: [1, "never", { generators: "never" }],
    sample45: [2, "never", { generators: "never" }],
    sample46: ["off", "never", { generators: "never" }],
    sample47: ["warn", "never", { generators: "never" }],
    sample48: ["error", "never", { generators: "never" }],
});

expectType<ESLintConfig<SampleRules>>({});
expectType<ESLintConfig<SampleRules>>({
    rules: {},
});
expectType<ESLintConfig<SampleRules>>({
    rules: {
        sample01: 0,
        sample02: 1,
        sample03: 2,
        sample04: "off",
        sample05: "warn",
        sample06: "error",
    
        sample07: [0],
        sample08: [1],
        sample09: [2],
        sample10: ["off"],
        sample11: ["warn"],
        sample12: ["error"],
    
        sample13: [0, "always"],
        sample14: [1, "always"],
        sample15: [2, "always"],
        sample16: ["off", "always"],
        sample17: ["warn", "always"],
        sample18: ["error", "always"],
        
        sample19: [0, "as-needed"],
        sample20: [1, "as-needed"],
        sample21: [2, "as-needed"],
        sample22: ["off", "as-needed"],
        sample23: ["warn", "as-needed"],
        sample24: ["error", "as-needed"],
        
        sample25: [0, "never"],
        sample26: [1, "never"],
        sample27: [2, "never"],
        sample28: ["off", "never"],
        sample29: ["warn", "never"],
        sample30: ["error", "never"],
        
        sample31: [0, "always", { generators: "always" }],
        sample32: [1, "always", { generators: "always" }],
        sample33: [2, "always", { generators: "always" }],
        sample34: ["off", "always", { generators: "always" }],
        sample35: ["warn", "always", { generators: "always" }],
        sample36: ["error", "always", { generators: "always" }],
        
        sample37: [0, "as-needed", { generators: "as-needed" }],
        sample38: [1, "as-needed", { generators: "as-needed" }],
        sample39: [2, "as-needed", { generators: "as-needed" }],
        sample40: ["off", "as-needed", { generators: "as-needed" }],
        sample41: ["warn", "as-needed", { generators: "as-needed" }],
        sample42: ["error", "as-needed", { generators: "as-needed" }],
        
        sample43: [0, "never", { generators: "never" }],
        sample44: [1, "never", { generators: "never" }],
        sample45: [2, "never", { generators: "never" }],
        sample46: ["off", "never", { generators: "never" }],
        sample47: ["warn", "never", { generators: "never" }],
        sample48: ["error", "never", { generators: "never" }],
    },
});
