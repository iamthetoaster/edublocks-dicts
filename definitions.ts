const dictionaryColor = "#15bad4";

Blockly.Blocks['dict_constructor'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("dict()");
        this.setOutput(true, null);
        this.setColour(dictionaryColor);
    }
};
