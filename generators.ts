Blockly.Python['dict_constructor'] = function(block) {
    const code = `dict()`;
    return [code, 0];
};

Blockly.Python['dict_brackets'] = function(block) {
    const dict_name = Blockly.Python.nameDB_.getName(block.getFieldValue('dict_name'), Blockly.VARIABLE_CATEGORY_NAME);
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    const code = `${dict_name}[${parameters}]`;
    return [code, 0];
};

Blockly.Python['dict_brackets_equals'] = function(block) {
    const dict_name = Blockly.Python.nameDB_.getName(block.getFieldValue('dict_name'), Blockly.VARIABLE_CATEGORY_NAME);
    const key = Blockly.Python.valueToCode(block, 'key', 0);
    const value = Blockly.Python.valueToCode(block, 'value', 0);
    const code = `${dict_name}[${key}] = ${value}\n`;
    return code;
};
