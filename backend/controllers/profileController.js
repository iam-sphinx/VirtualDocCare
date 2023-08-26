import User from "../mongodb/models/User.js";
import Patient from "../mongodb/models/Patient.js";
import Doctor from "../mongodb/models/Doctor.js";

export const getProfile = async (req, res, next) => {
  try {
    const userId = req.params.id; // Retrieve user ID from the verified token
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User profile not found",
      });
    }

    // You can customize the response format as needed
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    // Handle error and send error response
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const userId = req.user.id; // Retrieve user ID from the verified token
    const updatedData = req.body; // Updated profile data from request body;

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updatedData },
      {
        new: true, // Return the updated user
      }
    );

    const role = user.role;
    if (role == "patient") {
      const patientExists = await Patient.findOne({ user: userId });
      if (!patientExists) {
        const newPatientData = {
          age: updatedData.age,
          bio: updatedData.bio,
          desc: updatedData.desc,
          facebook: updatedData.facebook,
          instagram: updatedData.instagram,
          location: updatedData.location,
          marital_status: updatedData.marital_status,
          motivation: updatedData.motivation,
          sex: updatedData.sex,
          user: userId,
        };
        const newPatient = new Patient(newPatientData);
        await newPatient.save();
      }

      const updatedPatient = await Patient.findOneAndUpdate(
        { user: userId },
        { $set: updatedData },
        { new: true }
      );

      res.status(200).json({
        success: true,
        message: "Patient has been updated",
        data: updatedPatient,
      });
    }

    if (role == "doctor") {
      const doctorExist = await Doctor.findOne({ user: userId });
      if (!doctorExist) {
        const newDoctor = new Doctor({
          age : updatedData.age,
          availableDays: updatedData.availableDays,
          availableTimeSlots: updatedData.availableTimeSlots,
          bio: updatedData.bio,
          desc: updatedData.desc,
          facebook: updatedData.facebook,
          instagram: updatedData.instagram,
          location: updatedData.location,
          marital_status: updatedData.marital_status,
          motivation: updatedData.motivation,
          sex: updatedData.sex,
          specialization: updatedData.specialization,
          user: userId,
        });
        await newDoctor.save();
      }
      const updatedDoctor = await Doctor.findOneAndUpdate(
        { user: userId },
        { $set: updatedData },
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "Doctor Profile has been updated",
        data: updatedDoctor,
      });
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User profile not found",
      });
    }

    // You can customize the response format as needed
    res.status(200).json({
      success: true,
      message: "User profile updated successfully",
      data: user,
    });
  } catch (error) {
    // Handle error and send error response
    next(error);
  }
};

export const getPatientProfile = async (req, res, next) => {
  try {
    const user_id = req.params.id; // Retrieve user ID from the verified token
    const user = await Patient.findOne({ user: user_id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User profile not found",
      });
    }

    // You can customize the response format as needed
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    // Handle error and send error response
    next(error);
  }
};

export const getDoctorProfile = async (req, res, next) => {
  const { id } = req.body;
  try {
    const getDoc = await Doctor.findOne({ user: id });

    if (!getDoc) {
      return res.status(404).json({
        success: false,
        message: "Doctor profile not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctor has been found!",
      data: getDoc,
    });
  } catch (error) {
    next(error);
  }
};
