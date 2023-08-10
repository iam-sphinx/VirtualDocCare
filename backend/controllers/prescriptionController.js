import { createError } from "../error.js";
import Prescription from "../mongodb/models/Prescription.js";

// Create a new prescription
export const createPrescription = async (req, res, next) => {
  try {
    const { doctorId, patientId, medications, diagnosis, instructions } =
      req.body;

    // Create a new prescription
    const newPrescription = new Prescription({
      doctor: doctorId,
      patient: patientId,
      medications,
      diagnosis,
      instructions,
    });

    await newPrescription.save();

    res.status(201).json({
      success: true,
      message: "Prescription created successfully",
      data: newPrescription,
    });
  } catch (error) {
    next(error);
  }
};

// Update a prescription
export const updatePrescription = async (req, res, next) => {
  try {
    const prescriptionId = req.params.id;
    const { medications, diagnosis, instructions } = req.body;

    // Find and update the prescription
    const updatedPrescription = await Prescription.findByIdAndUpdate(
      prescriptionId,
      {
        medications,
        diagnosis,
        instructions,
      },
      { new: true } // Return the updated prescription
    );

    if (!updatedPrescription) {
      throw createError(404, "Prescription not found");
    }

    res.status(200).json({
      success: true,
      message: "Prescription updated successfully",
      data: updatedPrescription,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a prescription
export const deletePrescription = async (req, res, next) => {
  try {
    const prescriptionId = req.params.id;

    // Find and delete the prescription
    const deletedPrescription = await Prescription.findByIdAndDelete(
      prescriptionId
    );

    if (!deletedPrescription) {
      throw createError(404, "Prescription not found");
    }

    res.status(200).json({
      success: true,
      message: "Prescription deleted successfully",
      data: deletedPrescription,
    });
  } catch (error) {
    next(error);
  }
};

// Get prescriptions of a specific user (patient)
export const getUserPrescriptions = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    // Find prescriptions associated with the patient's ID
    const prescriptions = await Prescription.find({ patient: userId });

    res.status(200).json({
      success: true,
      message: "Prescriptions retrieved successfully",
      data: prescriptions,
    });
  } catch (error) {
    next(error);
  }
};
