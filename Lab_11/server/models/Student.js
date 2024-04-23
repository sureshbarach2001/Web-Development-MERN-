import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  email: { type: String, required: true, secure: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  rollno: { type: String, required: true },
});
const studentModel = mongoose.model("student", StudentSchema);
export { studentModel as Student };
