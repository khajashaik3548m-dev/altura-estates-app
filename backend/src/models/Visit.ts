import mongoose, { Schema, Document } from 'mongoose';

export interface IVisit extends Document {
  userId: mongoose.Types.ObjectId;
  propertyId: mongoose.Types.ObjectId;
  visitDate: Date;
  visitTime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const VisitSchema = new Schema<IVisit>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: 'Property',
      required: true,
      index: true,
    },
    visitDate: { type: Date, required: true },
    visitTime: { type: String, required: true },
    status: {
      type: String,
      enum: ['scheduled', 'completed', 'cancelled'],
      default: 'scheduled',
      index: true,
    },
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model<IVisit>('Visit', VisitSchema);
