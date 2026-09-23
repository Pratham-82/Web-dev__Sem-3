// use("web_dev");
// db.createCollection("students");

// create operations
// db.students.insertOne({
//   rollno: 1,
//   name: "John",
//   age: 20,
//   course: "Computer Science",
// });
// db.students.insertMany([
//   {
//     rollno: 2,
//     name: "Alice",
//     age: 21,
//     course: "Mathematics",
//   },
//   {
//     rollno: 3,
//     name: "Bob",
//     age: 22,
//     course: "Physics",
//   },
//   {
//     rollno: 4,
//     name: "Charlie",
//     age: 23,
//     course: "Chemistry",
//   },
// ]);

// db.students.findOne();
// db.students.find();

// db.students.updateOne({ name: "Bob" }, { $set: { age: 20 } });

//delete document
// db.students.deleteOne({ name: "Alex" });

use("collegeDB")

// db.createCollection("students")

// db.students.insert([
//     {
//         name: "John",
//         age: 20,
//         course: "Computer Science"
//     },
//     {
//         name: "Alice",
//         age: 21,
//         course: "Mathematics"
//     },
// ])

// db.students.find({age: {$gt: 20}})
db.students.find({$or: [{ age: { $lt: 20 } }, { course: "Mathematics" }]})
