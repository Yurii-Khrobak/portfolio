import mongoose from 'mongoose';

const Project = new mongoose.Schema({
  name: { type: String },
  link: { type: String },
  img_base64: { type: String }
})

export default mongoose.models.Project || mongoose.model('Project', Project);
