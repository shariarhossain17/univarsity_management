import { Schema, model } from 'mongoose';
import { bloodGroup, gender } from './admin.constant';
import { AdminModel, IAdmin } from './admin.interface';

export const adminSchema = new Schema<IAdmin, AdminModel>(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        middleName: {
          type: String,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: gender,
    },
    dateOfBirth: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
      unique: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: bloodGroup,
    },
    managementDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'ManagementDepartment',
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Admin = model<IAdmin, AdminModel>('Admin', adminSchema);
