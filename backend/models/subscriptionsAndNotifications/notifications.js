import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  message: { type: String, required: true }, 
  type: { 
    type: String, 
    enum: ['alert', 'reminder', 'info', 'warning'], 
    required: true 
  },  
  status: { 
    type: String, 
    enum: ['unread', 'read'], 
    default: 'unread' 
  },  // Status of the notification
  createdAt: { type: Date, default: Date.now },  
  updatedAt: { type: Date, default: Date.now },  
});

export default mongoose.model('Notification', notificationSchema);
