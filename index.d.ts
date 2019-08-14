// Type definitions for @jasonhk/eslint-config-types 
// Definitions by: Jason Kwok <https://github.com/JasonHK>

/// <reference path="utilities.d.ts" />

import { Linter } from "eslint";

export type RuleLevel = Linter.RuleLevel;

export type RuleLevelAndOptions<Options extends any[] = any[]> = Prepend<Partial<Options>, RuleLevel>;

export type RuleEntry<Options extends any[] = any[]> = RuleLevel | RuleLevelAndOptions<Options>;

export interface RulesRecord {
    [rule: string]: RuleEntry;
}

export type ESLintConfig<Rules extends RulesRecord = RulesRecord> = Omit<Linter.Config, "rules"> & { rules?: Partial<Rules>; };
