/*
    Add this file to $(ipython locate)/nbextensions/macro-cell.js
*/
define( function () {

    // Try to read JSON file specifying cell macros
    $.getJSON("/static/custom/macros.json", function(data) {
        var pickTemplateLabel = $("<span></span>")
                                .attr("class", "navbar-text")
                                .text("Cell Macro:");

        var pickTemplate = $("<select></select>").attr("id", "pick_template");

        $.each(data['cells'], function(key, cell) {
            var option = $("<option></option>")
                         .attr("value", cell['name'])
                         .text(cell['name'])
                         .attr("code", cell['lines'].join('\n'));
            pickTemplate.append(option);
        });

        $("div#maintoolbar-container").append(pickTemplateLabel);
        $("div#maintoolbar-container").append(pickTemplate);

        // Add a button to the toolbar for inserting a macro cell
        IPython.toolbar.add_buttons_group([
            {
                'label'   : 'Insert cell macro.',
                'icon'    : 'fa-coffee',
                'callback': function () {
                    var code = $("select#pick_template").find(":selected").attr("code");
                    var new_cell = IPython.notebook.insert_cell_above('code');
                    new_cell.set_text(code);
                    new_cell.focus_cell();
                }
            }
        ]);
    });

});
