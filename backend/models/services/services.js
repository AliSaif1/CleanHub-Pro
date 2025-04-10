import mongoose from 'mongoose';

const cleaningServiceSchema = new mongoose.Schema({
  serviceType: { type: String, enum: ['backyard', 'house', 'commercial', 'moving', 'electrical', 'plumbing'], required: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('CleaningService', cleaningServiceSchema);
