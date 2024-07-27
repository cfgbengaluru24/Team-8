import mongoose from 'mongoose';
const { Schema } = mongoose;

const formSchema = new Schema({
  formData: { type: Map, of: Schema.Types.Mixed, required: true }
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

export default Form; 