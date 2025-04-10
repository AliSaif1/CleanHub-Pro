import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // User who made the payment
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },  // Booking reference
  amount: { type: Number, required: true },  // Amount paid
  paymentMethod: { 
    type: String, 
    enum: ['credit_card', 'debit_card', 'paypal', 'cash'], 
    required: true 
  },  // Payment method used
  paymentStatus: { 
    type: String, 
    enum: ['pending', 'completed', 'failed', 'refunded'], 
    default: 'pending' 
  },  // Status of the payment
  transactionId: { type: String, required: true, unique: true },  // Unique transaction ID
  createdAt: { type: Date, default: Date.now },  // Creation timestamp
});

export default mongoose.model('Payment', paymentSchema);
