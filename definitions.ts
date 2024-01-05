const dictionaryColor = "#15bad4";

Blockly.Blocks['dict_constructor'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("dict()");
        this.setOutput(true, null);
        this.setColour(dictionaryColor);
    }
};

Blockly.Blocks['dict_brackets'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("variable_name"), "dict_name")
            .appendField("[");
        this.appendValueInput("parameters")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("]");
        this.setOutput(true, null);
        this.setColour(dictionaryColor);
    }
};

Blockly.Blocks['dict_brackets_equals'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("variable_name"), "dict_name")
            .appendField("[");
        this.appendValueInput("key")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("] = ");
        this.appendValueInput("value")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(dictionaryColor);
    }
};
