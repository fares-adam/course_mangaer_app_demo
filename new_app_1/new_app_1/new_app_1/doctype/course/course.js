// Copyright (c) 2022, app and contributors
// For license information, please see license.txt


frappe.ui.form.on('Course', {
  	// refresh: function(frm) {

	// }
});


frappe.ui.form.on("enrolled students", "student", function(frm, cdt, cdn){
    let stud = locals[cdt][cdn];
    if(stud.level < frm.doc.level){
      frappe.msgprint("level validation error");
      // remove row from table





    }


});
