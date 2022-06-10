# Copyright (c) 2022, app and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Exam(Document):
	pass

@frappe.whitelist()
def send_to_students(exam_name):
	course = frappe.get_doc("Course", exam_name)
	studs = course.enrolled_students
	exam = frappe.get_doc("Exam",exam_name)
	date = exam.appointment
	msg = f"kindly note that the appointment for you {course.name} exam is on {date}"
	for i in studs:
		frappe.sendmail(recipients=[i.email], sender="dez.miles12@gmail.com", subject="exam appointment", message=msg)
	frappe.msgprint("emails sent to students successfully")
	return
