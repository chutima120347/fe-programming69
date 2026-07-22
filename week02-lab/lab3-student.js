const student = {
  name: "ชุติมา สหพรอุดมการ",
  studentId: "650710680",
  major: "IT",
  introduce() {
    console.log(`ฉันชื่อ ${this.name} รหัส ${this.studentId}`);
  }
};

student.introduce();

student.gpa = 3.45;      // เพิ่ม property
delete student.major;    // ลบ property

const { name, gpa } = student;
console.log(`${name} ได้เกรดเฉลี่ย ${gpa}`);