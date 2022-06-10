// Copyright (c) 2022, app and contributors
// For license information, please see license.txt

frappe.ui.form.on('Exam', {
	// refresh: function(frm) {

  //
});
frappe.ui.form.on('Exam', {
    refresh: function(frm) {
      frm.add_custom_button(__("send to students"), function(){
        frappe.call('new_app_1.new_app_1.doctype.exam.exam.send_to_students', {
      exam_name: frm.doc.name
  }).then(r => {
      console.log(r.message)
  })

    });
  }
});


// frappe.call('new_app_1.new_app_1.doctype.exam.exam.send_to_students', {
//   args:{"exam_name":frm.doc.name}
// }).then(r => {
//  console.log(frm.doc.name)
//  })
