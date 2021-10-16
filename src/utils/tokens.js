export const comment = [
  "comment.block.documentation",
  "punctuation.definition.comment",
  "comment.line",
  "comment.block",
  "meta.path",
].join('",\n        "');

export const delimiter = ["punctuation.separator"];

export const propertyName = ["support.type.property-name"];

export const variableProperty = [
  "support.type.property-name.json",
  "support.variable.property",
].join('",\n        "');

export const objectProperty = ["variable.other.object.property"];

export const builtIn = ["support.class.builtin"];

export const string = [
  "string.quoted",
  "punctuation.definition.string",
  "string.template",
  "meta.attribute-selector",
].join('",\n        "');

export const operator = ["keyword.operator"];

export const foreground = ["source"];

export const keywordNull = ["constant.language.null"];

export const htmlBrackets = ["punctuation.definition.tag"];

export const brackets = ["punctuation.definition.attribute-selector"];

export const puncuation = ["punctuation.accessor"];

export const operatorLogical = ["keyword.operator.logical"];

export const attribute = ["entity.other.attribute-name"];

export const embedded = ["punctuation.section.embedded"];

export const keywordThis = ["variable.language.this"];

export const number = ["constant.numeric"];

export const unit = ["keyword.other.unit"];

export const color = ["constant.other.color.rgb-value"];

export const keywordAtRule = ["keyword.control.at-rule"];

export const brace = ["meta.brace", "punctuation.section.function.scss"].join(
  '",\n        "'
);

export const tag = ["entity.name.tag"];

export const component = ["support.class.component"];

export const keywordImportant = ["keyword.other.important"];

export const templateExp = [
  "punctuation.definition.template-expression.begin",
  "punctuation.definition.template-expression.end",
].join('",\n        "');

export const selectorClass = ["entity.other.attribute-name.class"];

export const selectorId = ["entity.other.attribute-name.id"];

export const constant = ["variable.other.constant"];

export const keywordFunction = ["storage.type.function"];

export const regex = [
  "constant.character.escape.backslash.regexp",
  "constant.other.character-class.range.regexp",
  "constant.character.numeric.regexp",
  "constant.character.escape.backslash.regexp",
  "constant.character.escape.backslash.regexp",
  "punctuation.definition.character-class.regexp",
  "punctuation.definition.group.regexp",
  "constant.other.character-class.regexp",
  "keyword.operator.or.regexp",
  "punctuation.definition.group.regexp",
  "string.regexp",
].join('",\n        "');

export const functCall = ["entity.name.function", "support.function.misc"].join(
  '",\n        "'
);

export const keywordImportAll = ["constant.language.import-export-all"];

export const dataType = ["storage.type"];

export const propertyValue = ["support.constant.property-value"];

export const supportConst = ["support.constant"];

export const escapeChar = ["constant.character.escape"];

export const boolean = [
  "constant.language.boolean",
  "constant.language.json.comments",
].join('",\n        "');

export const objectKey = ["meta.object-literal.key"];

export const punctuation = ["punctuation", "punctuation.section"].join(
  '",\n        "'
);

export const parameter = ["variable.parameter"];

export const variable = ["meta.definition.variable", "variable"].join(
  '",\n        "'
);

export const variableObj = ["variable.other.object"];

export const keyword = ["keyword.control", "keyword.operator.new"].join(
  '",\n        "'
);
