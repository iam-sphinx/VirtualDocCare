import { createError } from "../error.js";
import Appointment from "../mongodb/models/Appointment.js";

// Get user's appointments
export const getUserAppointments = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    // Retrieve appointments associated with the user's ID
    const appointments = await Appointment.find({ user: userId });

    res.status(200).json({
      success: true,
      message: "User's appointments retrieved successfully",
      data: appointments,
    });
  } catch (error) {
    next(error);
  }
};

// Create a new appointment
export const createAppointment = async (req, res, next) => {
  try {
    const { patient, doctor, appointmentDate, startTime, endTime } = req.body;

    // Create a new appointment
    const newAppointment = new Appointment({
      patient,
      doctor,
      appointmentDate,
      startTime,
      endTime,
    });

    await newAppointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      data: newAppointment,
    });
  } catch (error) {
    next(error);
  }
};

// Update an appointment
export const updateAppointment = async (req, res, next) => {
  try {
    const appointmentId = req.params.id;
    const { appointmentDate, appointmentTime } = req.body;

    // Find and update the appointment
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      {
        appointmentDate,
        appointmentTime,
      },
      { new: true } // Return the updated appointment
    );

    if (!updatedAppointment) {
      throw createError(404, "Appointment not found");
    }

    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      data: updatedAppointment,
    });
  } catch (error) {
    next(error);
  }
};

// Delete an appointment
export const deleteAppointment = async (req, res, next) => {
  try {
    const appointmentId = req.params.id;

    // Find and delete the appointment
    const deletedAppointment = await Appointment.findByIdAndDelete(
      appointmentId
    );

    if (!deletedAppointment) {
      throw createError(404, "Appointment not found");
    }

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
      data: deletedAppointment,
    });
  } catch (error) {
    next(error);
  }
};
